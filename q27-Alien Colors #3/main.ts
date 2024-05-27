/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

// Define Variable
let alienColors = "green";

// Using if and Else-if statements
if (alienColors === "green") {
    console.log("(version 1)You shot down green alien you have earned 5 points.");
}
else if(alienColors === "yellow"){
    console.log("You shot down yellow alien you have earned 10 points.");
}
else if(alienColors === "red"){
    console.log("You shot down red alien you have earned 15 points.");
}

// version 2
let alienColors2 = "yellow";

if (alienColors2 === "green") {
    console.log("You shot down green alien you have earned 5 points.");
}
else if(alienColors2 === "yellow"){
    console.log("(version 2)You shot down yellow alien you have earned 10 points.");
}
else if(alienColors2 === "red"){
    console.log("You shot down red alien you have earned 15 points.");
}

// version3
let alienColors3 = "red";

if (alienColors3 === "green") {
    console.log("You shot down green alien you have earned 5 points.");
}

else if(alienColors3 === "yellow"){
    console.log("You shot down yellow alien you have earned 10 points.");
}
else if(alienColors3 === "red"){
    console.log("(version 3)You shot down red alien you have earned 15 points.");
}