const strs = ["abc", "", "aaa", "a", "zz"];

function sortByLength(strs) {

  const result = strs.sort((b, a) => {
    return b.length - a.length;
  });

  return result;
}


console.log(strs);
console.log(sortByLength(strs));

document.body.innerHTML = sortByLength(strs);