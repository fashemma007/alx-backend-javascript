const express = require('express');

// It should be assigned to the variable app and this one must be exported
const app = express();
const port = 1245;

// endpoint '/'
app.get('/', (req, res) => {
  // Displays Hello Holberton School! in the page body
  res.send('Hello Holberton School!');
});

app.listen(port, () => { });

module.exports = app;
