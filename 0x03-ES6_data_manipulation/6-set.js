/**
 * Create a Set from a given array of integers
 * @param {Array} array - array to create the set from
 * @returns newly created set
 */
export default function setFromArray(array) {
  let result;
  if (Array.isArray(array)) {
    // create and return a Set using the passed in array param
    result = new Set(array);
  }
  return (result !== undefined) ? result : `${array} is not an Array`;
}
