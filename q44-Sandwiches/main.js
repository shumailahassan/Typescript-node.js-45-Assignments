/*Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/
// Define a function with a rest parameters
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making aSandwich with the following items: \n ");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
    console.log("\nNow Enjoy Sandwich\n");
}
//  call the function 3 time with 3 Different number of arguments
sandwich("Bread", "Cheese", "Tomato");
sandwich("Bread", "Cheese", "Tomato", "Lettuce");
sandwich("Bread", "Cheese", "Tomato", "Lettuce", "Mayo");
