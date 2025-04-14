// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];
  str
    .split(' ')
    .forEach((str) => words.push(str[0].toUpperCase() + str.slice(1)));

  //   for (let word of splitWord) {
  //     const upperCaseWord = word[0].toUpperCase() + word.slice(1);
  //     newArray.push(upperCaseWord);
  //   }

  return words.join(' ');
}

module.exports = capitalize;
