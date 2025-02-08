// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution - 1:
function reverseInt(n) {
  let reserverNum = n.toString().split('').reverse().join('');

  //   if (n < 0) {
  //     return parseInt(reserverNum) * -1; }
  // return parseInt(reserverNum);

  return parseInt(reserverNum) * Math.sign(n);
}

// Solution - 2:
// function reverseInt(n) {

// }

// Solution - 3:
// function reverseInt(n) {

// }

module.exports = reverseInt;
