/* eslint-disable class-methods-use-this */
import Car from './10-car';
/**
 * EVCar that extends the Car class with added `range` class attrib.
 */
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // method overriding
  cloneCar() {
    return new Car();
  }
}
