import { films } from '/data.js'

let usedFilms = [];
let currentFilm = null;
let remainingGuesses = 3;
let isWaiting = false;

const form = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input');
const submitButton = document.querySelector('button[type="submit"]');
const messageContainer = document.getElementsByClassName('message-container')[0];
const emojiContainer = document.getElementsByClassName('emoji-clues-container')[0];

function getRandomFilm() {
  if (usedFilms.length === films.length) {
    return null;
  }

  const availableFilms = films.filter(film => !usedFilms.includes(film));
  const randomFilm = availableFilms[Math.floor(Math.random() * availableFilms.length)];
  usedFilms.push(randomFilm);
  return randomFilm;
}

function displayFilm(film) {
  if (!film) {
    endGame();
    return;
  }
  emojiContainer.innerHTML = film.emoji.join("");
}

function endGame() {
  emojiContainer.innerHTML = '';
  messageContainer.innerHTML = "That's all folks!";
  disableForm(true);
}

function displayMessage(message) {
  messageContainer.innerHTML = message;
}

function disableForm(disable) {
  guessInput.disabled = disable;
  submitButton.disabled = disable;
}

function resetForNextQuestion() {
  isWaiting = true;
  disableForm(true);

  setTimeout(() => {
    currentFilm = getRandomFilm();
    if (currentFilm) {
      displayFilm(currentFilm);
      remainingGuesses = 3;
      guessInput.value = '';
      messageContainer.innerHTML = '';
      isWaiting = false;
      disableForm(false);
    } else {
      endGame();
    }
  }, 3000);
}

function handleGuess(guess) {
  if (guess.toLowerCase() === currentFilm.title.toLowerCase()) {
    displayMessage('Correct!');
    resetForNextQuestion();
  } else {
    remainingGuesses--;
    if (remainingGuesses > 0) {
      displayMessage(`Incorrect! You have ${remainingGuesses} more ${remainingGuesses === 1 ? 'guess' : 'guesses'} remaining.`);
    } else {
      displayMessage(`The film was ${currentFilm.title}!`);
      resetForNextQuestion();
    }
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (isWaiting) return;

  const guess = guessInput.value.trim();
  if (guess) {
    handleGuess(guess);
  }
});

currentFilm = getRandomFilm();
if (currentFilm) {
  displayFilm(currentFilm);
} else {
  endGame();
}
