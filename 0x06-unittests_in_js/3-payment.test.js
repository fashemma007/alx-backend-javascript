/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('uses the calculateNumber method of Utils', () => {
    // now spy on the method calculateNumber of class Utils
    sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.called).to.be.true;
    Utils.calculateNumber.restore();
  });
  it('arguments passed', () => {
    // now spy on the method calculateNumber of class Utils
    sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(Utils.calculateNumber.callCount).to.be.equal(1);
    Utils.calculateNumber.restore();
  });

  it('multiple calls', () => {
    // now spy on the method calculateNumber of class Utils
    sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(10, 25);
    expect(Utils.calculateNumber.callCount).to.be.equal(2);
    Utils.calculateNumber.restore();
  });
});
