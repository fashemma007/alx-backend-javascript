// create a small HTTP server using the http module
const http = require('http');

const port = 1245; // HTTP server should listen on port 1245

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  // page body for any endpoint as plain text
  res.setHeader('Content-Type', 'text/plain');
  // Displays Hello Holberton School!
  res.end('Hello Holberton School!');
});

app.listen(port, () => { });

module.exports = app;
