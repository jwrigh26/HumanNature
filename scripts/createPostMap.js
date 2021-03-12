const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const dirTree = require('directory-tree');
const R = require('ramda');

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
      path
    },
  };
}

// This is the main method for reading the Posts dir
// in order to create lazy loaded articles
function createPostMap() {
  const directoryPath = path.join(__dirname, '../src/modules/Posts');
  const tree = R.prop('children', dirTree(directoryPath));
  const isDirectory = (dir) => dir.type === 'directory';
  const meta = R.pipe(R.filter(isDirectory), R.reduce(parseMeta, {}))(tree);
  const buffer = Buffer.from(JSON.stringify(meta));

  // Take the metaContent and write to file :)
  const writeStream = fs
    .createWriteStream('./src/posts.map.json', { flags: 'w' })
    .on('finish', function () {
      console.log('Post list script completed. Please see src/posts.map.json');
    })
    .on('error', function (err) {
      console.log(err.stack);
    });

  writeStream.write(buffer, () => {
    console.log('Wrote post list to file.');
  });

  writeStream.end();
}

createPostMap();
