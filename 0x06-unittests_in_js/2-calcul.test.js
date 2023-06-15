/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */

const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber Additions', () => {
  it('1 + 3 should return 4', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });

  it('1 + 3.7 should return 5', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });

  it('1.5 + 3.7 should return 6', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });

  it('-1.5 + 3.7 should return 2', () => {
    expect(calculateNumber('SUM', -1.5, 3.7)).to.equal(3);
  });

  it('-1.5 + -3.7 should return -5', () => {
    expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
  });
});

describe('calculateNumber Subtractions', () => {
  it("calculateNumber('SUBTRACT', 1, 3)", () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });

  it("calculateNumber('SUBTRACT', 1, 3.7)", () => {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });

  it("calculateNumber('SUBTRACT', 1.5, 3.7)", () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });

  it("calculateNumber('SUBTRACT', -1.5, 3.7)", () => {
    expect(calculateNumber('SUBTRACT', -1.5, 3.7)).to.equal(-5);
  });

  it("calculateNumber('SUBTRACT', -1.5, -3.7)", () => {
    expect(calculateNumber('SUBTRACT', -1.5, -3.7)).to.equal(3);
  });
});

describe('calculateNumber Divisions', () => {
  it("calculateNumber('SUBTRACT', -1.5, -3.7)", () => {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.3333333333333333);
  });

  it("calculateNumber('DIVIDE', 1, 3.7)", () => {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });

  it("calculateNumber('DIVIDE', 1.5, 3.7)", () => {
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });

  it("calculateNumber('DIVIDE', -1.5, 3.7)", () => {
    expect(calculateNumber('DIVIDE', -1.5, 3.7)).to.equal(-0.25);
  });

  it("calculateNumber('DIVIDE', -1.5, -3.7)", () => {
    expect(calculateNumber('DIVIDE', -1.5, -3.7)).to.equal(0.25);
  });
});
