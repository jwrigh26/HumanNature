const lineReader = require('line-reader');
const Promise = require('bluebird');

// const eachLine = function(filename, options, iteratee) {
//   return new Promise(function(resolve, reject) {
//     lineReader.eachLine(filename, options, iteratee, function(err) {
//       if (err) {
//         reject(err);
//       } else {
//         console.log('HEY --------------')
//         resolve("Hello");
//       }
//     });
//   });
// }
const eachLine = Promise.promisify(lineReader.eachLine);
module.exports = eachLine;

