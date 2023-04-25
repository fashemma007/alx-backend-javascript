export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // to track number of times the emdpoint was called
  let noOfCalls = 0;
  // if the get method is called on the endpoint
  if (weakMap.get(endpoint)) {
    noOfCalls = weakMap.get(endpoint); // get previous number
    // console.log(`noOfCalls: ${noOfCalls}`);
  }
  weakMap.set(endpoint, noOfCalls + 1); // increment it
  if (noOfCalls + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
