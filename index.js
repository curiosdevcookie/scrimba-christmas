const str = "00:58";

function validTime(str) {
  let tempStr = str.split(':');
  console.log(tempStr);

  const hour = tempStr[0];
  const min = tempStr[1];

  return (hour <= 23 && min <= 59 ? true : false);
}

document.body.innerHTML = `The given time's format is ${validTime(str)} time.`;