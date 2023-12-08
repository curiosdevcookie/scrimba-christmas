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

// Use enter for adding an item to list
document.getElementById("inputWishlist").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    fetchAndWriteList();
  }
});

