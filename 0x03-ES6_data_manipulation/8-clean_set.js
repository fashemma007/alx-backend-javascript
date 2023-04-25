/**
 *
 * @param {Set} set - set to search in
 * @param {String} startString - string to search for
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  // check if startString is undefiend or an empty string
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set] // spread set in temp array
    // run a filter for each defined element in the array
    // if the element starts with `startString`
    .filter((str) => (str !== undefined ? str.startsWith(startString) : ''))
    // slice the elemnt and return ending parts of it
    .map((str) => (str !== undefined ? str.slice(startString.length) : ''))
    .join('-');
}
