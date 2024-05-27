// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famouspersons:string = "George Bernard Shaw"; 
let famousqoute:string = '"Do not wait for the right opportunity. create it."';

// compose message
let message:string = `${famouspersons} who said, ${famousqoute}`;
console.log(message);
