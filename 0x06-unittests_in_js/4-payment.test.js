/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  before(() => {
    // wrap method calculateNumber of class Utils as stub method
    sinon
      .stub(Utils, 'calculateNumber')
      .returns(10);
  });
  it('verify console.log', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.called).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    Utils.calculateNumber.restore();
    consoleLogSpy.restore();
  });
});
