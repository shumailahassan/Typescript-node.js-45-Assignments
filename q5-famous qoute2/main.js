// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famouspersons = "George Bernard Shaw";
var famousqoute = '"Do not wait for the right opportunity. create it."';
// compose message
var message = "".concat(famouspersons, " who said, ").concat(famousqoute);
console.log(message);
