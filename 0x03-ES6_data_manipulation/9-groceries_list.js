/**
 * Create a map from an object
 * @returns {Map}
 */
export default function groceriesList() {
  const finalMap = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  // get all the keys in the object & save into an array
  const keys = Array.from(Object.keys(obj));

  // for each item, set the value to the key in the finalMap
  keys.map((item) => finalMap.set(item, obj[item]));

  return finalMap;
}
