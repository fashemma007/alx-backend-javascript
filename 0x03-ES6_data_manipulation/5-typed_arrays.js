/**
 * Creates a new Int8 typed array
 * @param {Number} length - size or lengrth of the array to create
 * @param {Number} position - index to place the value
 * @param {Number} value - new value to be added
 * @returns array
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  // create array nuffer
  const newBuffer = new ArrayBuffer(length);
  // create Int8 array using newBuffer
  const int8 = new Int8Array(newBuffer, 0, length);
  // assign the given value to designated postiition
  int8.set([value], position);
  // create a new data view to be returned
  const dataView = new DataView(newBuffer);
  return dataView;
}
