/*Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!*/

let animals: string[] = ["Cow","Sheep","Goat","Camel"];

for(let i of animals){
    console.log(i);
}

for(let j of animals){
    console.log(`${j} is a Domestic Animal.`)
}

console.log(`All these animals ${animals[0]},${animals[1]},${animals[2]},${animals[3]} meat is Halal in Islam and would make a great pet!`);