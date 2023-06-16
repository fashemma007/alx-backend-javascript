/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let UtilCalculateNumber;
  before(() => {
    // wrap method calculateNumber of class Utils as stub method
    UtilCalculateNumber = sinon.stub(Utils, 'calculateNumber')
      .returns(10);
  });
  it('verify console.log', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(UtilCalculateNumber.called).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    UtilCalculateNumber.restore();
    consoleLogSpy.restore();
  });
});
