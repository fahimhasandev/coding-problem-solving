// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //take empty object
  const maxCharObj = {};
  let max = 0;
  let maxCount = '';
  // 1. run loop and save as key and value
  //   for (let char of str) {
  //     maxCharObj[char] = maxCharObj[char] + 1 || 1;
  //   }
  for (let char of str) {
    if (maxCharObj[char]) {
      maxCharObj[char]++;
    } else {
      maxCharObj[char] = 1;
    }
  }

  for (let char in maxCharObj) {
    if (maxCharObj[char] > max) {
      max = maxCharObj[char];
      maxCount = char;
    }
  }

  return maxCount;
}

module.exports = maxChar;
