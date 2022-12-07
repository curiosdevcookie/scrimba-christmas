import products from "./data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(products) {

  const shoppingCart = products.filter((product) => product.type === "sweet").map((product) => {
    return {
      item: product.item,
      price: product.price
    }
  });

  return shoppingCart;

};
console.log(getSaleItems(products));


//Adding to the DOM;

const string = JSON.stringify(getSaleItems(products));

const priceParagraph = document.createElement('p')

const priceNode = document.createTextNode(string);

document.getElementById('products').appendChild(priceNode);


// document.getElementById('products').innerHTML = string;

