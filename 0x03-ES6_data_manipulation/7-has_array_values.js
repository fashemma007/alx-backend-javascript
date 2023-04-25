/**
 * Checks if all elements in the array are present in the set
 * @param {Set} set
 * @param {Array} array
 */
export default function hasValuesFromArray(set, array) {
  // loop thru the array
  for (const elem of array) {
    // check if each element of the array is preseny in the set
    if (!set.has(elem)) {
      // once any element is absent, declare FALSE on entire array
      return false;
    }
  }
  // return TRUE only when the entire elelment in array has been checked
  return true;
}
