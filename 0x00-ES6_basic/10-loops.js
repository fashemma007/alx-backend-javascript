export default function appendToEachArrayValue(array, appendString) {
  // console.log(`This is the array ${array}`);
  const result = [];
  for (const idx of array) {
    // console.log(`IDX is ${idx}`);
    result.push(appendString + idx);
  }

  return result;
}
