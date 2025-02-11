// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution - 2:
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// Solution - 1:
// function anagrams(stringA, stringB) {
//   const string1 = buildCharMap(stringA);
//   const string2 = buildCharMap(stringB);

//   if (Object.keys(string1).length !== Object.keys(string2).length) {
//     return false;
//   }

//   for (let char in string1) {
//     if (string1[char] !== string2[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharMap(element) {
//   const charObj = {};
//   for (let char of element.replace(/[^\w]/g, '').toLowerCase()) {
//     charObj[char] = charObj[char] + 1 || 1;
//   }

//   console.log(charObj);
//   return charObj;
// }

module.exports = anagrams;
