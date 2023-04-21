// import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    }
    if (typeof currency === 'object') {
      this._currency = currency;
    }
  }

  // Setter methods
  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    }
  }

  set currency(currency) {
    if (typeof amount === 'object') {
      this._currency = currency;
    }
  }

  // Getter fmethods
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    // display price in given currency format
    const amount = this._amount;
    const currencyName = this._currency.name;
    const currencyCode = this._currency.code;
    return `${amount} ${currencyName} (${currencyCode})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    return null;
  }
}
