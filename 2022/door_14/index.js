const value = 'abcde';

function countVowelConsonant(value) {
  const vowel = value.split('').map((letter) => {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      return 1;
    } else {
      return 2;
    }
  }
  );

  return vowel.reduce((a, b) => a + b, 0);
}

console.log(countVowelConsonant(value));

function addTextNode(fn) {
  const textNode = document.createTextNode(countVowelConsonant(value));
  document.body.appendChild(textNode);
  document.body.style.fontSize = '3rem';
}

addTextNode(countVowelConsonant(value));