/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber Additions', () => {
  it('1 + 3 should return 4', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });

  it('1 + 3.7 should return 5', () => {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('1.5 + 3.7 should return 6', () => {
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it('-1.5 + 3.7 should return 2', () => {
    assert.equal(calculateNumber('SUM', -1.5, 3.7), 3);
  });

  it('-1.5 + -3.7 should return -5', () => {
    assert.equal(calculateNumber('SUM', -1.5, -3.7), -5);
  });
});

describe('calculateNumber Subtractions', () => {
  it("calculateNumber('SUBTRACT', 1, 3)", () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });

  it("calculateNumber('SUBTRACT', 1, 3.7)", () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
  });

  it("calculateNumber('SUBTRACT', 1.5, 3.7)", () => {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });

  it("calculateNumber('SUBTRACT', -1.5, 3.7)", () => {
    assert.equal(calculateNumber('SUBTRACT', -1.5, 3.7), -5);
  });

  it("calculateNumber('SUBTRACT', -1.5, -3.7)", () => {
    assert.equal(calculateNumber('SUBTRACT', -1.5, -3.7), 3);
  });
});

describe('calculateNumber Divisions', () => {
  it("calculateNumber('SUBTRACT', -1.5, -3.7)", () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3), 0.3333333333333333);
  });

  it("calculateNumber('DIVIDE', 1, 3.7)", () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  });

  it("calculateNumber('DIVIDE', 1.5, 3.7)", () => {
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });

  it("calculateNumber('DIVIDE', -1.5, 3.7)", () => {
    assert.equal(calculateNumber('DIVIDE', -1.5, 3.7), -0.25);
  });

  it("calculateNumber('DIVIDE', -1.5, -3.7)", () => {
    assert.equal(calculateNumber('DIVIDE', -1.5, -3.7), 0.25);
  });
});
