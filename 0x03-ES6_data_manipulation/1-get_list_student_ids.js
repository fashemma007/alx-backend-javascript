/**
   * getIds
   * @param {*} objects
   * @returns the id of a given object
   */
const getIds = (obj) => obj.id;

/**
 *
 * @param {*} array
 * @returns an array of ids
 */
export default function getListStudentIds(array) {
  let newArr = [];

  if (Array.isArray(array)) { // check if param is an array
    // use `map` to call back `getIds` for each elemet in array
    newArr = array.map(getIds);
  } else {
    return newArr;
  }
  return newArr;
}
