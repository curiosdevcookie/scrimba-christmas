function centuryFromYear(num) {
  return Math.floor(num / 100) + (num % 100 === 0 ? 0 : 1);
}

document.body.innerHTML = centuryFromYear(1900);
