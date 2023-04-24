/**
 *
 * @param {*} array
 * @returns an array of ids
 */
export default function getListStudentIds(array) {
  let newArr = [];
  /**
   * getIds
   * @param {*} objects
   * @returns the id of a given object
   */
  function getIds(obj) {
    return obj.id;
  }
  if (Array.isArray(array)) { // check if param is an array
    // use `map` to call back `getIds` for each elemet in array
    newArr = array.map(getIds);
  } else {
    return newArr;
  }
  return newArr;
}
