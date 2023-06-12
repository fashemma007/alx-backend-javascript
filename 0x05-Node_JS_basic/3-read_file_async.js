// shorthand for importing methods from modules
const { readFile } = require('fs');

function countStudents(filePath) {
  const students = {}; // initialize empty dict 
  const fields = {}; // initialize empty dict 
  let length = 0; // length counter
  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        // console.log(lines);
        // lines = lines.slice(1); // delete the csv headers
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            const field = lines[i].toString().split(',');
            if (field[0] === '') { // chk for empty lines
              // console.log("All good");
              continue;
            } else {
              // console.log(field[0]);
              length += 1;
              if (Object.prototype.hasOwnProperty.call(students, field[3])) {
                students[field[3]].push(field[0]);
              } else {
                students[field[3]] = [field[0]];
              }
              if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
                fields[field[3]] += 1;
              } else {
                fields[field[3]] = 1;
              }
            }
          }
        }
        console.log(`Number of students: ${length - 1}`); // account for headers
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
