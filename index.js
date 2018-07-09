var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var items = {};
 //random number 1 - 100
 var price = Math.floor(Math.random() * 99) + 1;
 console.log(price);
 //Object.assign(items, { 'itemName : ${item}, itemPrice: ${price}'})
 //cart.push(items);
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
