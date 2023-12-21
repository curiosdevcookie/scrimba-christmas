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