"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!*/
let favorite_fruits = ["Mango", "Watermelon", "Strawberry"];
if (favorite_fruits.includes("Mango")) {
    console.log("I really like Mangos");
}
if (favorite_fruits.includes("Watermelon")) {
    console.log("I really like Watermelon");
}
if (favorite_fruits.includes("Strawberry")) {
    console.log("I really like Strawberry");
}
if (favorite_fruits.includes("orange")) {
    console.log("I really like orange");
}
if (favorite_fruits.includes("banana")) {
    console.log("I really like banana");
}
