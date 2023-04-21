export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    }
    /*
    throw error if a class inheriting from this doesn't have
    `evacuationWarningMessage` method
    */
    if (
      new.target !== Building
      && this.evacuationWarningMessage === undefined
    ) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }
}
