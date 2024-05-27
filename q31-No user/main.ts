/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/

// Creating a Array with 5 values
let userNames = ["Ali","Erum","Hina","Admin","Hassan"]

// Remove all of the usernames from our array Now our array is empty
userNames =[]


// if statements for checking lenght of our Array is empty
if(userNames.length === 0){
    console.log("Your Array is Empty  We need to find some users!")
}
else{
    // If Array is not empty Use ForEach loop on Array
    userNames.forEach(allUser =>{
        if(allUser === "Admin"){
            console.log(`Hello ${allUser},would you like to see a status report?`);
        }
        else{
            console.log(`Hello ${allUser},thank you for logging in again`);
        }
})
}