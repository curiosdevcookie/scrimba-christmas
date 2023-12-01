/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/


function capitalizeWord(word) {
  const bigWord = word.split('').map((char, index) => {
    return (index === 0 ? char.toUpperCase() : char);
  }).join('');
  return bigWord;
}


/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  const bigSentence = str.split(' ').map((wordy, index) => {
    return capitalizeWord(wordy);
  }).join(' ');
  return bigSentence;
}


// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));


document.getElementsByTagName('body');

const capitalizeWordTextNode = document.createElement('p');
document.body.appendChild(capitalizeWordTextNode);
capitalizeWordTextNode.innerText = 'Capitalize Word';

const toTitleCaseTextNode = document.createElement('p');
document.body.appendChild(toTitleCaseTextNode);
toTitleCaseTextNode.innerText = toTitleCase('pumpkin pranced purposefully across the pond');