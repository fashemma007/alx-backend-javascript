const request = require('request');
const { expect } = require('chai');

describe('index page', () => {
  const API_URL = 'http://localhost:7865';

  it('correct status code', () => new Promise((done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  }));

  it('correct body message', () => new Promise((done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  }));
});
