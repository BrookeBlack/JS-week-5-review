// Challenge Exercise: Build a Simple E-Commerce Checkout System
// Write a function named `checkout` that does the following:
// 1. Prompts the user for their name and displays a welcome message.
function myCheckout() {
   userName = prompt ("Hello! What is your name?");
  let prompt() = `Hello ${userName}, hopefully your day is going well!`;
};
// 2. Prompts the user to enter a product name and its price.
function myProduct() {
   product = prompt ("What would you like today?");
  let prompt() = `${product} is $5.99 for one unit!`;
};
// 3. Prompts the user to enter the quantity they want to purchase.
function myQuanity() {
   quanity = prompt ("How many do you need?";)
  let prompt() = `Great choice! ${quanity} added to your cart!`;
};
// 4. Calculates the total cost and displays a summary of their purchase.
function mySummary() {
   let total = (product * quanity * 5.99);
   let summary = prompt ("${userName} your ${quanity} ${product} checkout total is ${total}");
  console.log(summary);
}
