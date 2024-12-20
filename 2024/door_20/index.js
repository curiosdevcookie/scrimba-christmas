const elfFirstNames = [
  "Aurora", "Blitzen", "Crispin", "Dazzle", "Evergreen", "Frost", "Glimmer",
  "Holly", "Icicle", "Joyful", "Kringle", "Luna", "Merry", "Nutmeg",
  "Olwen", "Pine", "Quill", "Razzle", "Sparkle", "Tinsel", "Umbra",
  "Vixen", "Whisk", "Xylo", "Yule", "Zippy"
];

const elfLastNames = [
  "Applecheeks", "Bells", "Candycane", "Dazzlebright", "Everbright", "Frostwhisk",
  "Gingersnap", "Hollyberry", "Icestorm", "Jovial", "Kindleflame", "Lightwhisper",
  "Merrysprout", "Nutcracker", "Oakenleaf", "Peppermint", "Quicksilver", "Raindrop",
  "Snowdust", "Twinkletoes", "Underwood", "Velvet", "Winterberry", "Xylospark",
  "Yuletide", "Zestwind"
];

const Form = document.getElementById('form');

const generateButton = document.getElementById('generate-btn');

generateButton.addEventListener('click', () => {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;

  console.log(firstName);
  console.log(lastName);

  const elfName = matches(firstName, lastName);

  console.log(elfName);
  renderElfName(elfName);
  return elfName;

});

function getInitialFirst(firstName) {
  return firstName[0];
}

function getInitialLast(lastName) {
  return lastName[0];
}

function matches(firstName, lastName) {
  const elfFirstName = elfFirstNames.find(name => name[0] === getInitialFirst(firstName));
  const elfLastName = elfLastNames.find(name => name[0] === getInitialLast(lastName));
  const elfName = `${elfFirstName} ${elfLastName}`;
  return elfName;
}

function renderElfName(elfName) {
  const elfList = document.getElementById('elf-names-list');
  const firstLi = elfList.firstElementChild;
  const newLi = document.createElement('li');
  newLi.textContent = elfName;
  elfList.replaceChild(newLi, firstLi);
}

/*
 * 🎅 Task:
 * - Generate an elf first and last name that matches the user’s first and last name initials, then display it on the screen.
 * - Example: if the user’s name is "John Doe," the elf name could be "Joyful Dazzle."
 * - Display the generated elf names in the "Registered Employees" list.
 */

/*
 * 🌟 Stretch Goals:
 * - Generate the elf names using an LLM API (like HuggingFace). 
 * - Don't save the same name twice. (not necessary for the normal task)
 * - Make sure to use Scrimba's environment variables feature so you don't expose your API key 
 */
