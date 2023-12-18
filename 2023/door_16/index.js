window.onload = () => {
  sort(sorteesArr);
};

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
    id: generateID()
  },
  {
    name: "Nellie",
    hasBeenGood: true,
    id: generateID()
  },
  {
    name: "Valerie",
    hasBeenGood: false,
    id: generateID()
  },
  {
    name: "Astrid",
    hasBeenGood: true,
    id: generateID()
  }
]

console.log("sorteesArr", sorteesArr);

const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
btn.addEventListener("click", add)

function add() {
  // only add if the ID is not already in the array:


  addPerson();
  sort(sorteesArr);
}

function sort(arr) {

  const people = sorteesArr.map(person => {
    return person.hasBeenGood ? document.getElementById("nice-list").innerHTML += `<li>${person.name}</li>` : document.getElementById("naughty-list").innerHTML += `<li>${person.name}</li>`;
  });
}


function addPerson() {
  const person = document.getElementById("person").value;
  const hasBeenGood = document.getElementById("has-been-good").checked;
  const newPerson = {
    name: person,
    hasBeenGood: hasBeenGood,
    id: generateID()
  }

  const ids = sorteesArr.map(person => person.id);
  if (ids.includes(newPerson.id)) {
    alert("This person is already in the list!");
    return;
  }


  sorteesArr.push(newPerson);
  document.getElementById("person").value = "";
  document.getElementById("has-been-good").checked = false;
  document.getElementById("person");
}

// Helper functions
function generateID() {
  return Math.floor(Math.random() * 100000000000000);
}


/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/