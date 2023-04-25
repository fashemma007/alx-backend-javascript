/**
 * Function that returns the sum of all the student ids.
 * @param {Array} array - List of students
 * @returns {Number} sum of all ids in the array
 */
export default function getStudentIdsSum(array) {
  const reducerFunc = (accumulator, currentObject) => accumulator + currentObject.id;
  return array.reduce(reducerFunc, 0);
}
