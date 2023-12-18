window.onload = () => {
  sort(sorteesArr);
};

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,

  },
  {
    name: "Nellie",
    hasBeenGood: true,

  },
  {
    name: "Valerie",
    hasBeenGood: false,

  },
  {
    name: "Astrid",
    hasBeenGood: true,

  }
];

const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
btn.addEventListener("click", addPerson)

function addPerson() {
  addPersonToArray();
  sort(sorteesArr);
}

function sort(arr) {
  document.getElementById("nice-list").innerHTML = '';
  document.getElementById("naughty-list").innerHTML = '';

  arr.forEach((person) => {
    const li = document.createElement("li");
    li.innerText = person.name;

    if (person.hasBeenGood) {
      niceList.appendChild(li);
    } else {
      naughtyList.appendChild(li);
    }
  });
}

function addPersonToArray() {
  const person = document.getElementById("person").value;
  const hasBeenGood = document.getElementById("has-been-good").checked;
  const personExists = sorteesArr.some(p => p.name === person && p.hasBeenGood === hasBeenGood);

  if (!personExists) {
    const newPerson = {
      name: person,
      hasBeenGood: hasBeenGood,
    }
    sorteesArr.push(newPerson);
  }
  return sorteesArr;
}
