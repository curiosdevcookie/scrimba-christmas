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
