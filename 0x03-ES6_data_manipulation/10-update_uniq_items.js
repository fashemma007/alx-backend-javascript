/**
 * Updates all items whose initial quantity was 1
 * @param {Map} map
 * @returns {Map} updated map
 */
export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    map.forEach((value, key) => {
      if (value === 1) {
        map.set(key, 100);
        // console.log(map);
      }
    });
    return map;
  }
  throw new Error('Cannot process');
}
