const dangerArray = [
  ["🎅", "👺"],
  [
    ["🎅", "🦁"],
    ["👹", "🎅"]
  ],
  [
    [
      ["🎅", "🐻"],
      ["🧌", "🎅"]
    ],
    [
      ["🐯", "🎅"],
      ["🎅", "😈"]
    ]
  ]
];

function saveSanta(arr) {
  for (const index in arr) {
    const value = arr[index];
    if (Array.isArray(value)) {
      saveSanta(value);
    }
    else {
      console.log(`${index} ${value}`);
      if (value !== "🎅") {
        arr.splice(index, 1)
      }
    }
  }
  return arr;
}

console.log(saveSanta(dangerArray));
console.log(dangerArray);

// 
const someArray = ["a", "b", "c", "d", "e", "f"];
for (const index in someArray) {
  console.log(`${index} ${someArray[index]}`);
}
for (const index in someArray) {
  if (someArray[index] === "c" || someArray[index] === "d") {
    someArray.splice(index, 1);
  }
  else {
    console.log(`${index} ${someArray[index]}`);
    console.log(someArray.length);
  }
}
