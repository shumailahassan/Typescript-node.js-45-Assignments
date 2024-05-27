/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

let mango = "mango";
let upperCaseMango = "MANGO";
let ten = 10;
let twenty = 20;
let fruits = ["apple","banana","orange"];

// Tests for equality and inequality with strings
console.log("is mango is equal to mango?");
console.log(mango == "mango");

console.log("\nis mango is not equal to mango?");
console.log(mango != "mango");

// Tests using the lower case function
console.log("\nis mango is equal to Mango after converting to lowercase?");
console.log(upperCaseMango.toLowerCase() == "mango");

console.log("\nis mango is not equal to Mango after converting to lowercase?");
console.log(upperCaseMango.toLowerCase() != "mango");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log("\nIs ten equal to twenty?");
console.log(ten == 20);

console.log("\nIs ten not equal to twenty?");
console.log(ten != 20);

console.log("\nIs ten greater than zero?");
console.log(ten > 0);

console.log("\nIs ten less than zero?");
console.log(ten < 0);

console.log("\nIs ten greater than or equal to 6?");
console.log(ten >= 6);

console.log("\n Twenty less than or equal to 10.");
console.log(twenty <= ten);


// Tests using "and" & "or" operators

console.log("\nIs mango equal to mango and ten equal to 10?");
console.log(mango == "mango" && ten == 10);

console.log("\nMango is not equal to mango and ten is greater then 20.");
console.log(mango != "mango" && ten > 20);

console.log("\nIs mango equal to mango or ten is not equal to 10?");
console.log(mango == mango || ten != 10);

console.log("\nMango is not equal to mango or ten is greater then 20.");
console.log(mango != mango || ten > 20);

// Test whether an item is in a array
console.log("\nIs banana in the fruits array?");
console.log(fruits.includes("banana"));
// Test whether an item is not in a array
console.log("\nIs orange not in the fruits array?");
console.log(!fruits.includes("orange"));






