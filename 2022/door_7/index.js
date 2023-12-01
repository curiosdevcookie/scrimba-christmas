/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

const str = "I'm so happy it's Monday";
function altCaps(str) {

  let tempStr = str.split('');
  tempStr = tempStr.map((char, index) => {
    return (index % 2 === 0 && char.match(/^a-zA-Z0-9/g) !== 0 ? char.toUpperCase() : index % 2 === 0 && char.match(/^a-zA-Z0-9/g) === 0 ? char : char.toLowerCase());
  }
  );
  return tempStr.join('');
}

console.log(altCaps(str));

document.body.innerHTML = altCaps(str);

//regex match letter: /[a-z]/i
// && char.match(/[a-zA-Z]/g) !== 0 

//regex /^a-zA-Z0-9/g

//https://www.regextester.com