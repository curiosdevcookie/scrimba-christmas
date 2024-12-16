/*
Santa wants to monetize Christmas so he has set up a merch store. To save money, he got a junior dev from the cheapest dev shop in the backstreets of Lapland to write the code.

The site is taking shape, but now Santa is concerned that it might not be secure, so it's time for you to put on your ethical hacker hat and see if you can do the following:

⚠️ IMPORTANT 1: When tackling tasks 1, 2 and stretch goals, you are not allowed to edit index.html, index.js, data.js, or index.css in any way! For task 3 you may edit these files.

⚠️ IMPORTANT 2: Any code you use to complete tasks 1 or 2 must be pasted into mySolution.js 👈. If you fail to do this your entry will not count!

Task 1 
Render a button that, when pressed, logs 'You have been hacked 🏴‍☠️' to the console just to prove there are vulnerabilities.

Task 2
Change the product title h2 to "Do not buy this".

Task 3
Fix the code so it's unhackable! 

🔥Stretch Goals 👇 - these are only for really dedicated (ethical 😇) hackers to do BEFORE task 3 above.

Task 4
Hijack the Buy button so when it is clicked it calls a new function. The new function should log 'diverting payment to my account 💰'

Task 5
Log out the credit card details.

*/

const stars = document.querySelectorAll('.stars li');
const hiddenRatingInput = document.getElementById('hidden-rating');
let currentRating = 0;

stars.forEach((star, index) => {
  // Handle click
  star.addEventListener('click', () => {
    setRating(index + 1);
  });

  // Handle keyboard navigation
  star.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setRating(index + 1);
    } else if (e.key === 'ArrowRight') {
      const next = stars[index + 1];
      if (next) next.focus();
    } else if (e.key === 'ArrowLeft') {
      const prev = stars[index - 1];
      if (prev) prev.focus();
    }
  });
});

function setRating(rating) {
  rating = parseInt(rating);
  if (isNaN(rating) || rating < 1 || rating > 5) return;

  currentRating = rating;
  hiddenRatingInput.value = rating;

  stars.forEach((star, index) => {
    star.setAttribute('aria-checked', index < rating ? 'true' : 'false');
    star.tabIndex = index + 1 === rating ? 0 : -1;
  });

  console.log(`Rated ${rating} star(s)`);
}


document.addEventListener('submit', (e) => {
  e.preventDefault();

  const ratingValue = hiddenRatingInput.value;
  let stars = [];
  if (ratingValue && !isNaN(ratingValue) && ratingValue > 0 && ratingValue <= 5) {
    for (let i = 0; i < ratingValue; i++) {
      stars.push('<span class="review-star">★</span>');
    }
  }

  const textArea = document.getElementById('text-area');
  const text = sanitizeInput(textArea.value);
  const textDisp = document.getElementById('text-output');
  textDisp.innerHTML += `<p>${stars.join(' ')} ${text}</p>`;
  textArea.value = '';
});


document.getElementById('prod-buy').addEventListener('click', function (e) {
  e.preventDefault();
  alert('Product added to basket.');
});

function sanitizeInput(input) {
  return input.replace(/[&<>"']/g, function (match) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[match];
  });
}