/* Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
function copyMagicianArray(arr) {
    return __spreadArray([], arr, true);
}
function make_great(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "The Great " + magicianArray[i];
    }
}
function show_magicians(magician) {
    magician.forEach(function (Element) {
        console.log(Element);
    });
}
var magicianCopy = copyMagicianArray(magician);
make_great(magicianCopy);
console.log("\n\nThis is my Modified of the Array:");
show_magicians(magicianCopy);
console.log("\n\nThis is my original Array:");
show_magicians(magician);
