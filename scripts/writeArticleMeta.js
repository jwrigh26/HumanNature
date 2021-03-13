const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const R = require('ramda');
const lineReader = require('line-reader');

// The worker: it is responsible for making objects
// for each post's article.
function parseMeta(data, post) {
  const meta = require(`${R.prop('path', post)}/meta.json`);
  const { blurb, date, entry, id, title } = meta;
  const path = `./${R.prop('name', post)}/${entry}`;
  return {
    ...data,
    [title]: {
      blurb,
      date,
      id,
      key: uuidv4(),
      path,
    },
  };
}

// This is the main method for reading the Post dir
// in order to create lazy loaded articles
function writeArticleMeta() {
  const directoryPath = path.join(__dirname, '../src/modules/Post/articles');
  function readMeta(file) {


    try {
      const filePath = `${directoryPath}/${file}`;
      const extension = path.extname(file);
      const fileName = path.basename(file, extension);
      let meta = {name: fileName, key: uuidv4()};

      let isParsingMeta = false;
      lineReader.eachLine(filePath, (line) => {
        if (R.trim(line) === '*/') {
          console.log('Meta: ', meta);
          isParsingMeta = false;
          return false;
        }
        if (R.trim(line) === '/** Meta') {
          isParsingMeta = true;
        }
        if (isParsingMeta) {
          const metaArray = R.pipe(R.trim, R.split(': '))(line);
          const key = R.pipe(
            R.nth(0),
            R.split('*'),
            R.nth(1),
            R.trim
          )(metaArray);
          if (key.length > 0) {
            const value = R.pipe(R.nth(1), R.trim)(metaArray);
            meta = { ...meta, [key]: value };
          }
          // const metaObj = { [R.nth(0, metaArray)]: R.nth(1, metaArray) };
        }
      });
    } catch (error) {
      console.log('ReadMeta: ');
      console.log(error);
    }
  }

  // If options, they go before callback. ie: { withFileTypes: true }
  fs.readdir(directoryPath, (error, files) => {
    if (error) {
      console.log(error);
      return;
    }
    files.forEach((file) => {
      if (path.extname(file) === '.js') {
        readMeta(file);
      }
    });
  });
}

writeArticleMeta();
