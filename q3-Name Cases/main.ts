// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let personName = "Shumaila hassan";
// LowerCase
console.log("Lowercase:", personName.toLowerCase());
// upperCase
console.log("Uppercase:", personName.toUpperCase());
// TittleCase
console.log("Tittlecase:", personName.replace(/\b\w/g, c=> c.toUpperCase()));



