/*More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var guestList = ["kainat", "sunaina", "saira"];
console.log("Great News! we found a bigger table");
// unshift()
guestList.unshift("maida");
// splice()
guestList.splice(Math.floor(guestList.length / 2), 0, "saniya");
// push
guestList.push("asiya");
// print message
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",You all are invited to dinner."));
});
