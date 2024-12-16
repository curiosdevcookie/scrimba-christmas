const emojis = ['🎄', '🎁', '🎅', '☃️'];

let firstCard = null;
let secondCard = null;
let canFlip = true;

function initializeGame() {
  createCards(emojis);
  shuffleCards();

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.addEventListener('click', handleCardClick));
}

function createCards(emojis) {
  const pairs = emojis.flatMap(emoji => [emoji, emoji]);
  const cards = pairs.map(emoji => `
    <article class="card">
      <div class="card-inner">
        <div class="card-front">${emoji}</div>
        <div class="card-backside"></div>
      </div>
    </article>
  `);

  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = cards.join('');
}

function shuffleCards() {
  const cards = Array.from(document.querySelectorAll('.card'));
  const gameBoard = document.getElementById('game-board');

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  cards.forEach(card => gameBoard.appendChild(card));
}

function turnCard(card) {
  if (!canFlip || card.classList.contains('revealed')) return;

  card.classList.add('revealed');

  if (!firstCard) {
    firstCard = card;
  } else {
    secondCard = card;
    canFlip = false;
    checkForMatch();
  }
}

function checkForMatch() {
  const isMatch = firstCard.querySelector('.card-front').textContent ===
    secondCard.querySelector('.card-front').textContent;

  if (isMatch) {
    firstCard.removeEventListener('click', handleCardClick);
    secondCard.removeEventListener('click', handleCardClick);
    resetCards();
    checkIfAllPairsMatch();
  } else {
    setTimeout(() => {
      firstCard.classList.remove('revealed');
      secondCard.classList.remove('revealed');
      resetCards();
    }, 1000);
  }
}

function resetCards() {
  firstCard = null;
  secondCard = null;
  canFlip = true;
}

function handleCardClick(event) {
  const card = event.currentTarget;
  turnCard(card);
}

function checkIfAllPairsMatch() {
  const cards = document.querySelectorAll('.card');
  const allPairsMatch = Array.from(cards).every(card =>
    card.classList.contains('revealed')
  );

  if (allPairsMatch) {
    youWin();
  }
}

function youWin(event) {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = `
  <section class="you-win">
    <h3>🎉 You win! 🎉</h3>
    <button id="play-again" onclick="initializeGame()">Play again</button>
  </section
  `;
}

initializeGame();
