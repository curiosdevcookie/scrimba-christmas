

// const people = document.getElementsByID('people').value;
// console.log(people);

function fetchAndWriteNames() {
  const namesInput = document.getElementById('names').value;
  const people = namesInput.split(',').map(name => name.trim());
  writeInHTML(people);
}
function writeInHTML(arr) {

  const formattedPeople = generateSecretSantaPairs(arr);

  const formattedPeoplePairs = Object.entries(formattedPeople);

  const list = document.getElementById("pairs");
  //write the obj to the list:
  list.innerHTML = formattedPeoplePairs.map((pair) => {
    return `<li>${pair[0]} buys for ${pair[1]}</li>`;
  }).join("");
};

function generateSecretSantaPairs(arr) {
  const shuffledPeople = shuffle(arr);
  const pairedPeople = pairPeople(shuffledPeople);
  const formattedPeople = formattedPairPeople(pairedPeople)

  return formattedPeople;
};


// Helper functions

function shuffle(arr) {
  const array = [...arr];
  const shuffled = [];
  while (shuffled.length < array.length) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    if (!shuffled.includes(randomElement)) {
      shuffled.push(randomElement);
    }
  }
  return shuffled;
}

function pairPeople(arr) {
  const people = [...arr];

  const pairs = people.map((person, index) => {
    if (index === people.length - 1) {
      return [person, people[0]];
    } else {
      return [person, people[index + 1]];
    }
  });
  return pairs;
}

function formattedPairPeople(arr) {
  const pairs = [...arr];
  const formattedPairs = pairs.reduce((acc, pair) => {
    acc[pair[0]] = pair[1];
    return acc;
  }, {});
  return formattedPairs;
}
