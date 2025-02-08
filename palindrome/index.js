// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let reversedString = '';
//   for (let char of str) {
//     reversedString = char + reversedString;
//   }

//   //   if (reversedString === str) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }

//   return reversedString === str;
// }

// Alternative solution --not ideal solution
// 0 10 14 --> is 'every()' value greater than 5
// array.every((val) => val > 5)
function palindrome(str) {
  return str.split('').every((char, i) => {
    console.log(i);
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
