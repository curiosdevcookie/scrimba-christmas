const string = "I'm almost out of coffee"

function panic(string) {
  const newString = string.toUpperCase().replaceAll(' ', ' 😱 ') + '!';
  return newString;
}

console.log(panic(string));

document.body.innerHTML = panic(string);