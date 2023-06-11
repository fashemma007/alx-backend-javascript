process.stdout.write("Welcome to Holberton School, what is your name?\n");
/*
 * No need to import or `require` process
 * process.stdin.isTTY; returns True if user typed in console
 * & False if variable is passed to the program using redirections`> | ...`

process.stdin.on('readable', function () {  // allow
  // The user should be able to input their name on a new line
  var name = process.stdin.read();
  if (name !== null) {
    // The program should display Your name is: INPUT
    process.stdout.write(`Your name is: ${name}`);
  }
});
// When the user ends the program
process.stdin.on('end', () => {
  process.stdout.write("This important software is now closing\n");
});
*/
if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
