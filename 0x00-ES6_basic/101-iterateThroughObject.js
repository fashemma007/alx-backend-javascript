// [ 'Bob', 'Jane', 'Sylvie' ]
export default function iterateThroughObject (reportWithIterator) {
  let returnList = [];
  returnList = reportWithIterator.join(' | ');
  // console.log(returnList);
  return returnList;
}
