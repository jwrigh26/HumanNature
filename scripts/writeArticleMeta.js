const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const R = require('ramda');
const lineReader = require('line-reader');
const BBPromise = require('bluebird');
const eachLine = BBPromise.promisify(lineReader.eachLine);

function parseFile(line, fileName, isParsingMeta, setParsing) {
  // Get ready to start reading lines for meta
  if (R.trim(line) === '/** Meta') {
    setParsing(true);
  }

  // Reached end of Meta comment
  if (R.trim(line) === '*/') {
    setParsing(false);
  }

  // If parsing and inside the meta comment
  // Break up the line based on ':'
  // Validate we have have meta by confirming
  // array only has 2 items
  // Key: array item 0, remove the '*' because it's a note
  //      Then grab item 1 after split and trim it
  // Value: is item 1 of first created array based on ':' split
  if (isParsingMeta && R.trim(line) !== '/** Meta') {
    const metaArray = R.pipe(R.trim, R.split(': '))(line);
    if (metaArray.length === 2) {
      const key = R.pipe(R.nth(0), R.split('*'), R.nth(1), R.trim)(metaArray);
      const value = R.pipe(R.nth(1))(metaArray);
      return { [key]: value };
    }
  }
}

async function readMeta(filePath, fileName) {
  // return new Promise(resolve => setTimeout(resolve, 2000));
  let meta = { name: fileName, key: uuidv4() };
  let isParsingMeta = false;
  try {
    await eachLine(filePath, (line) => {
      const lineMeta = parseFile(
        line,
        fileName,
        isParsingMeta,
        (parsing) => (isParsingMeta = parsing)
      );
      if (lineMeta) {
        meta = { ...meta, ...lineMeta };
      }
    });
    return meta;
  } catch (error) {
    console.log('ReadMeta Error');
    console.log(error);
  }
}

function writeArticleMeta() {
  const directoryPath = path.join(__dirname, '../src/modules/Post/articles');
  let articleMetaDictionary = {};

  fs.readdir(directoryPath, async (error, files) => {
    if (error) {
      console.log(error);
      return;
    }

    const articleMeta = await files.reduce(async (meta, file) => {
      const extension = path.extname(file);
      const filePath = `${directoryPath}/${file}`;
      const fileName = path.basename(file, extension);

      if (extension === '.js') {
        const [fileMeta, m] = await Promise.all([readMeta(filePath, fileName), meta]);
        return { ...m, [fileName]: fileMeta };
      }
      return meta;
    }, {});
    articleMetaDictionary = {...articleMetaDictionary, ...articleMeta};

    // What are we returning
    console.log('------------------- WRITE METHOD DONE ---------------------');
    console.log(articleMetaDictionary);
  });
}

writeArticleMeta();
