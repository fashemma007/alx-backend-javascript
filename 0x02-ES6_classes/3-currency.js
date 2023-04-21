export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw (TypeError('Currency code must be a string'));
    } else {
      this._code = code;
    }
    if (typeof name !== 'string') {
      throw (TypeError('Currency name must be a string'));
    } else {
      this._name = name;
    }
  }

  // Setter methods
  set code(code) {
    if (typeof code !== 'string') {
      throw (TypeError('Currency code must be a string'));
    } else {
      this._code = code;
    }
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw (TypeError('Currency name must be a string'));
    } else {
      this._name = name;
    }
  }

  // Getter methods
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
