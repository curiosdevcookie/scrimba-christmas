/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */

const veggieMeals = ["Pizza", "Spaghetti aglio e olio"];
const meatMeals = ["Ham", "Turkey"];



const calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", () => {
  const result = document.getElementById("food");
  const numberOfPeople = document.getElementById("num-input").value;
  const vegetarian = document.getElementById("vegetarian-input").checked;

  if (vegetarian) {
    result.textContent = numberOfPeople < 5 ? `${veggieMeals[0]} 🍕` : `${veggieMeals[1]} 🍝`;
  }

  else {
    result.textContent = numberOfPeople < 5 ? `${meatMeals[0]} 🍖` : `${meatMeals[1]} 🦃`;
  }
});
