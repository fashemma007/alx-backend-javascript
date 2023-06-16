/* eslint-disable default-case */
function calculateNumber(type, a, b) {
  const aa = Math.round(a);
  const bb = Math.round(b);
  let result = 0;
  if (type === 'SUM') {
    result = aa + bb;
  }
  if (type === 'SUBTRACT') {
    result = aa - bb;
  }
  if (type === 'DIVIDE') {
    if (bb === 0) {
      result = 'Error';
    } else {
      result = aa / bb;
    }
  }
  return result;
}

module.exports = calculateNumber;
