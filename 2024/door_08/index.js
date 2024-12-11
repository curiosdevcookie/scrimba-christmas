// The keyboard has been rendered for you
import { renderKeyboard } from './keyboard.js'
import { renderGuess, start, guessArr } from './starter.js'

document.getElementById('keyboard-container').addEventListener('click', checkGuess)


// Some useful elements
const guessContainer = document.getElementById('guess-container')
const snowmanParts = document.getElementsByClassName('snowman-part')

/*
Challenge  
1. Your challenge is to build a Christmas take on the classic game "Hangman" where a player attempts to guess a word by selecting letters to save a snowman from melting.
- The snowman is made up of 6 parts: hat, arm, nose, scarf, head, and body. These are separate images and have been positioned with CSS.
- At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -
- The player selects a letter. 
- If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.
- If the selected letter does not appear in the word, one part of the snowman gets removed.
- If the player guesses the entire word, they win! 
    - any removed parts of the snowman are reinstated.
    - the snowman gets sunglasses
    - the message "You Win!" is displayed in the "guess-container" div.
-If the player guesses wrong 6 times: 
    - only a puddle remains.
    - the message "You Lose!" is displayed in the "guess-container" div.
    
*** Stretch Goals *** 

- Disable the letter button once a letter has been used.
- Add a "New Game" button that appears at the end of a game and resets the app. (You will need to create an array of words to guess)
*/

// Set the word to guess
export const word = "gift"
// 6 guesses for the 6 parts of the snowman
let guesses = 6


function checkGuess(event) {

  const letter = getLetter(event)
  if (!letter) return;
  console.log("Guessed letter:", letter);
  console.log("Word:", word);

  const isIncluded = word.includes(letter)
  console.log(isIncluded)
  if (isIncluded) {
    console.log("Letter is in the word")
    replaceDashWithLetter(letter, word)
  } else {
    console.log("Letter is not in the word")
    guesses = removeSnowmanPart(guesses)
  }
}

function getLetter(event) {
  if (!event.target.matches('button.letter')) return;
  const letter = event.target.id
  const button = event.target;

  button.disabled = true;
  console.log(letter)
  return letter;
}

function replaceDashWithLetter(letter, word) {
  // Update the guessArr based on the letter position(s)
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      guessArr[i] = letter
    }
  }

  renderGuess()

  if (!guessArr.includes('-')) {
    handleWin()
  }
}

function handleWin() {
  const guessContainer = document.getElementById('guess-container')
  guessContainer.innerHTML = 'You Win!'
  const snowmanParts = document.getElementsByClassName('snowman-part')
  Array.from(snowmanParts).forEach(part => {
    part.style.display = 'block'
  })
}

function removeSnowmanPart(guesses) {
  const snowmanParts = document.getElementsByClassName('snowman-part');

  const index = snowmanParts.length - guesses;
  console.log("Guesses left:", guesses);
  console.log("Removing part at index:", index);

  if (snowmanParts[index]) {
    snowmanParts[index].style.display = 'none';
  }

  guesses--;

  if (guesses === 0) {
    handleLoss();
  }

  return guesses;
}

function handleLoss() {
  const guessContainer = document.getElementById('guess-container')
  guessContainer.innerHTML = 'You Lose!'

  // refresh the page
  setTimeout(() => {
    location.reload()
  }, 1000)
}


renderKeyboard()
start(word)