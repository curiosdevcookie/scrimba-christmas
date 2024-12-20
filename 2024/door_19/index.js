import shoppingList from "./shoppingList.js";
/*
    You're shopping for holiday gifts, but money is tight
    so we need to consider the cheapest items first.
    Use JavaScript's built-in array sort() (or toSorted()) method to
    write a function that returns an array of products sorted 
    by price, cheapest to most expensive. 
    
    Log the sorted array to the console to double-check you
    solved it correctly.
*/


function sortProducts(list) {
  const sortedProducts = shoppingList.toSorted(((a, b) => a.price - b.price));
  return sortedProducts;
}

const listByCheapest = sortProducts(shoppingList);


const shoppingListDisplay = document.querySelector("#shopping-list");
if (!shoppingListDisplay) {
  throw new Error('Shopping list element not found');
}

shoppingList.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${item.product}: $${item.price.toFixed(2)}`;
  shoppingListDisplay.appendChild(listItem);
});

function renderList(items) {
  shoppingListDisplay.innerHTML = "";
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.product}: $${item.price.toFixed(2)}`;
    shoppingListDisplay.appendChild(listItem);
  });
}

const sortButton = document.getElementById("sortPrices");
if (!sortButton) {
  throw new Error('Sort button not found');
}

sortButton.addEventListener("click", () => {
  sortButton.disabled = true;
  const sortedList = sortProducts(shoppingList);
  renderList(sortedList);
  sortButton.disabled = false;
});

/**
 * Stretch goals:
 * 
 * 1. Log the items to the console in a more formatted way, 
 *    like this (one item per line):
 * 
 *    💕: $0
 *    🍬: $0.49
 *    🍫: $0.99
 *    🍭: $1.99
 *    🧁: $2.99
 *    ...etc.
 * 
 * 2. Create a UI for this by displaying the unsorted items first, then
 *    having a button that will sort the items on the page by price.
 */