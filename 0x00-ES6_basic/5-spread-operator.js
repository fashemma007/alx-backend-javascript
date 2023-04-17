export default function concatArrays (array1, array2, string) {
  // spread array and strings into a single array
  const concat = [...array1, ...array2, ...string];
  return concat;
}
