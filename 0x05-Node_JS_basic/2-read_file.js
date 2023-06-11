const fs = require('fs');


/**
 * Read the database file provided in `path` synchronously
 * @param {Path} path
 */
function countStudents(path) {
  const students = {}; // initialize empty dict 
  const fields = {}; // initialize empty dict 
  let length = 0; // length counter
  try {
    // read the file synchronously
    const content = fs.readFileSync(path, 'utf-8');
    // console.log(content);
    // split the file by new-lines and save as list
    let lines = content.toString().split('\n');
    lines = lines.slice(1); // delete the csv headers
    // console.log(lines);
    for (let i = 0; i < lines.length; i += 1) { // loop thru the list
      if (lines[i]) { // if elememt is valid
        const field = lines[i].toString().split(',');
        if (field[0] === '') { // chk for empty lines
          // console.log("All good");
          continue;
        } else {
          // console.log(field[0]);
          length += 1;

          // console.log(field);
          // chk if the the 4th elem in list `field` exists in students dict
          if (Object.prototype.hasOwnProperty.call(students, field[3])) {
            //  append the student's 1st name to the list
            students[field[3]].push(field[0]);
          } else {
            // create a key of the 4th elem with a list of firstnames as value
            students[field[3]] = [field[0]];
          }
        }
        // store the num of students per field
        // increment if key exists already
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else { // create k:v init to 1
          fields[field[3]] = 1;
        }
      }
    }
    console.log(`Number of students: ${length}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
