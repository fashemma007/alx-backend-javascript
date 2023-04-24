/**
 * Retrieves students in a given location.
 * @param {Array} students - The array of students objects.
 * @param {String} city - The students location.
 * @returns array of objects that contains search string
 */
export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    // checcks for all objects whose location prop matches searc string
    const newArray = students.filter((student) => student.location === city);
    return newArray;
  }
  return [];
}
