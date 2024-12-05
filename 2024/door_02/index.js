const calendarContainer = document.getElementById('calendar');

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('article');
  box.classList.add('card');

  let card = document.createElement('div');
  card.classList.add('card-inner');

  let cardFront = document.createElement('div');
  cardFront.classList.add('card-front');

  let cardBack = document.createElement('div');
  cardBack.classList.add('card-backside');

  let number = document.createElement('p');
  number.classList.add('number');
  number.textContent = i;
  number.setAttribute('aria-label', `Day ${i} of advent calendar`);

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  icon.setAttribute('aria-hidden', 'true');

  // Append elements in the correct order
  cardBack.appendChild(number);
  cardBack.appendChild(icon);

  card.appendChild(cardFront);
  card.appendChild(cardBack);

  box.appendChild(card);

  calendarContainer.appendChild(box);
}
