// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOlution - 1
// function reverse(str) {
//   // const arr = str.split('')
//   // arr.reverse();
//   // return arr.join('') // join back into string
//   return str.split('').reverse().join(''); // join back into string
// }

// solution - 2:
// function reverse(str) {
//   // 1. create an empty string called 'reversed'
//   let reversed = '';

//   // 2. for each character in the provided string
//   // 3. Take the character and add it to the start 'reversed'
//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   //4. Return the variable 'reversed'
//   return reversed;
// }

// Solution - 3:
function reverse(str) {
  //first we will split into array, then call reduce
  const reversedString = str.split('');
  return reversedString.reduce((str, rev) => rev + str, '');
}

//reverse('hello');

module.exports = reverse;

// 1. turn 'str' into an array
// 2.
