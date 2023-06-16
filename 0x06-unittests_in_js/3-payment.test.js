/* eslint-disable jest/no-hooks */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(Utils, 'calculateNumber');
  });
  afterEach(() => {
    Utils.calculateNumber.restore();
  });
  it('uses the calculateNumber method of Utils', () => {
    // now spy on the method calculateNumber of class Utils
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.called).to.be.true;
  });
  it('arguments passed', () => {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(Utils.calculateNumber.callCount).to.be.equal(1);
  });

  it('multiple calls', () => {
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(10, 25);
    expect(Utils.calculateNumber.callCount).to.be.equal(2);
  });
});
