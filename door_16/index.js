const value = "aba caba";

function insertDashes(value) {
  //iterate over the string, insert a dash if the current letter is followed by another letter:
  const letters = value.split(' ');
  const dash = letters.map((letter) => {
    return letter.split('').join('-');
  });
  return dash.join(' ');
}

document.body.innerHTML = insertDashes(value);