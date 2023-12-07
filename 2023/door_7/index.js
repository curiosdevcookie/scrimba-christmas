const wishlist = [
  "Macbook Air M2",
  "Shampoo",
  "Storage racks"
];

wishlistItems.innerHTML = wishlist.map((item) => {
  return `<li>${item}</li>`;
}
).join("");


function fetchAndWriteList() {

  const item = fetchInput();
  if (!item)
    return;

  wishlist.push(item);
  appendToList(wishlist);
  document.getElementById("inputWishlist").value = "";
}


//helper functions
function fetchInput() {
  const inputWishlist = document.getElementById("inputWishlist").value;
  if (inputWishlist === "") {
    alert("Please enter items 🙂");
    return;
  }
  return inputWishlist;
}

function appendToList(arr) {
  const wishlistItems = document.getElementById("wishlistItems");

  wishlistItems.innerHTML = arr.map((item) => {
    return `<li>${item}</li>`;
  }
  ).join("");
  return wishlistItems;
}




/** Challenge: 
  - Iterate over the wishlist array.
  - Dynamically render your wishlist from the array.
  - Style the wishlist with CSS.
**/