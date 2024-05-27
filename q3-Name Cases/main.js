var personName = "Shumaila hassan";
// LowerCase
console.log("Lowercase:", personName.toLowerCase());
// upperCase
console.log("Uppercase:", personName.toUpperCase());
// TittleCase
console.log("Tittlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
