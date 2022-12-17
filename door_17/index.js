
/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, 76], 89, 98, [87, 56, 90],
  [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
  ["🐟", "💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flattenFlat(kittyScores) {
  return kittyScores.flat();
}

console.log(flattenFlat(kittyScores));

function flattenReduce(kittyScores) {
  return kittyScores.reduce((acc, curr) => acc.concat(curr));
}

console.log(flattenReduce(kittyScores));

function flattenFlatMap(kittyScores) {
  return kittyScores.flatMap((x) => x);
}

console.log(flattenFlatMap(kittyScores));

function flattenConcatSpread(kittyScores) {
  return [].concat(...kittyScores);
}

console.log(flattenConcatSpread(kittyScores));

function flattenApplyConcat(kittyScores) {
  return [].concat.apply([], kittyScores);
}

console.log(flattenApplyConcat(kittyScores));


//DOM manipulation

function createList() {
  const list = document.createElement('ul');
  document.body.appendChild(list);
}

createList();

const listItem = document.createElement('li');
listItem.innerText = flattenFlat(kittyPrizes);
document.body.appendChild(listItem);

const listItem2 = document.createElement('li');
listItem2.innerText = flattenReduce(kittyPrizes);
document.body.appendChild(listItem2);

const listItem3 = document.createElement('li');
listItem3.innerText = flattenFlatMap(kittyPrizes);
document.body.appendChild(listItem3);

const listItem4 = document.createElement('li');
listItem4.innerText = flattenConcatSpread(kittyPrizes);
document.body.appendChild(listItem4);

const listItem5 = document.createElement('li');
listItem5.innerText = flattenApplyConcat(kittyPrizes);
document.body.appendChild(listItem5);
