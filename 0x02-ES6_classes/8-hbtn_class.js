export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // value to return when cast to number
  valueOf() {
    return this._size;
  }

  // value to return when cast to string
  toString() {
    return this._location;
  }
}
