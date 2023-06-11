const process = require('process');
process.stdin.setEncoding('utf8');

const welcome = "Welcome to Holberton School, what is your name?";
console.log(welcome);

process.stdin.on('readable', function () {  // allow
  // The user should be able to input their name on a new line
  var name = process.stdin.read();
  if (name !== null) {
    // The program should display Your name is: INPUT
    process.stdout.write(`Your name is: ${name}`);
    console.log(`Your name is: ${name}`);
  }
});

// When the user ends the program
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
