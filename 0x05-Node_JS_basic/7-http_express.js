// create a more complex HTTP server using the http module
const express = require('express');
// shorthand for importing methods from modules
const { readFile } = require('fs');

const port = 1245; // HTTP server should listen on port 1245
function countStudents(filePath) {
  const students = {}; // initialize empty dict
  const fields = {}; // initialize empty dict
  let length = 0; // length counter
  return new Promise((resolve, reject) => {
    readFile(filePath, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        let results = '';
        const lines = data.toString().split('\n');
        // console.log(lines);
        // lines = lines.slice(1); // delete the csv headers
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            const field = lines[i].toString().split(',');
            if (field[0] === '') { // chk for empty lines
              // console.log("All good");
              length += 0;
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
        results += `Number of students: ${length - 1}\n`; // account for headers
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            results += (`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`);
          }
        }
        resolve(results);
      }
    });
  });
}

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((results) => {
    // const output = results.toString();
    res.send(['This is the list of our students', results].join('\n'));
  }).catch(() => {
    res.status(500).send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => { });

module.exports = app;
