/*T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.*/
function make_shirt(size, message) {
    return size + message;
}
var myCatalogue = make_shirt(36, " Tough Times Never Last But Tough People Do");
console.log(myCatalogue);
