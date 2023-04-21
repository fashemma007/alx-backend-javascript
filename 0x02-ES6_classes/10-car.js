/**
 * Car class which accepts `brand`, `motor` and `color` of the car all strings
 */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   *cloneCar method returns a new object of the class.
   */
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
