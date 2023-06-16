const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

// type validation in routes:: :id(\\d+) means id can only be +ve ints
app.get('/cart/:id(\\d+)', (request, response) => {
  const { id } = request.params;

  response.send(`Payment methods for cart ${id}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
