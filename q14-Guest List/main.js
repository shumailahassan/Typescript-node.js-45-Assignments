// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invte to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["kainat", "sunaina", "meerab"];
guestList.map(function (items) { return console.log("Dear ".concat(items, ", you are invited to the dinner.")); });
