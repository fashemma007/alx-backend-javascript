const express = require('express');

const app = express(); // instance of express
const PORT = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
