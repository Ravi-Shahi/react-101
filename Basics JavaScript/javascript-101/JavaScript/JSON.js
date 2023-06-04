/*
JSON > JavaScript Object Notation is a format for storing and transporting Data


methods:
parse() > Parses a JSON Object and returns Java Script Objects
stringify() > Converts a JavaScript Object  to a JSON string
*/

//JS object
const phoneBook = {
  Ravi: 12345677,
  Akash: 12309885,
  Bikash: 34546564,
  Shashi: 345621324,
};

console.log("JavaScript Object", phoneBook);
const phoneBookJSON = JSON.stringify(phoneBook); // convert JS object to JSON
console.log("JSON", phoneBookJSON);
const jsObject = JSON.parse(phoneBookJSON); // parse JSON to JS Object
console.log("JSON Object:", jsObject);
