function centuryFromYear(num) {
  return num >= 0 ? Math.ceil(num / 100) : Math.floor(num / 100);
}

document.body.innerHTML = centuryFromYear(-1905);
