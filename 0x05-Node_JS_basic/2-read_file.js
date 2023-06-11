var fs = require('fs');

/**
 * countStudents
 * @param {Path} path
 */
function countStudents(path) {
  // Use fs.readFile() method to read the file
  fs.readFile(path, 'utf8', function (err, data) {
    // Display the file content
    let counter = data.;
    console.log(`Number of students: ${counter}`);
  });
};
fs.createReadStream;
module.exports = countStudents;