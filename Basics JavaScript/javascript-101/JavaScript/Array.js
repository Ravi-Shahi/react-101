/*
Array length
Array toString()
Array pop()
Array push()
Array join()
Array shift()
Array unshift()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
*/

let thisBeArray = [1,2,3,["something","angain",2]]

// Array length
console.log("Length of array:",thisBeArray.length);
// Array toString()
let convertArrayToString = thisBeArray.toString();
console.log("Converted to string:",convertArrayToString);// gives comma separated array values
// Array join()
let newStringWithSepratorBe = thisBeArray.join(" ")
console.log("Joind with whitespace:",newStringWithSepratorBe);
// Array pop()--> removes last element from array
let removedItem = thisBeArray.pop();
console.log(removedItem)// return the value that was removed
console.log("Removed last item:",thisBeArray);
// Array push()
console.log(thisBeArray.push(removedItem));// returns new array length
console.log("New Item added:",thisBeArray)
// Array shift() --> removes first element of array and shifts all elements to index n-1
let fruits = ["apple","peech","orange","mango"]
let firstFruit = fruits.shift();
console.log("current Array:",fruits)
console.log("First element removed:",firstFruit)
// Array unshift()
console.log("Before Unshift:", fruits);
fruits.unshift("Apple");
console.log("After using unshift:",fruits);
// Array delete()
delete fruits[0]; //deletes first element and makes it empty
console.log(fruits);
fruits[0] = "Lemon";// gives error
console.log(fruits)
// Array concat()
let vegitable = ["potato","Brinjal","ladyfinger"]
let furitsNVegitable = fruits.concat(vegitable);
console.log(furitsNVegitable);
let arr_1 = ["one","two","three","four"];
let arr_2 = ["five","six","seven","eigth"]
let arr_3 = ["nine","ten","eleven","twelve"]
let concatMultiArray = arr_1.concat(arr_1,arr_3);
console.log(concatMultiArray);
// Array flat() 
let arrSubArr =  [[1,2],[3,4],[5,6]];
let newArr = arrSubArr.flat();
console.log("Flat used:",newArr);
// Array splice(indexToInsert,number of element to delete, elements to be add)--> used to add new items to an array
console.log("Fruits Array", fruits);
fruits.splice(2,0,"berry","strawberry")
console.log("fruits spliced:",fruits);
fruits.splice(0,2,"Hello","HelloFruit");//adds and deletes two elements
console.log(fruits);
//can also be used to just delete the elements
fruits.splice(0,2) //deletes two elements from position 0
console.log(fruits);
// Array slice()---> returns new array
console.log("Fruits",fruits);
let subFruitBasket = fruits.slice(2);// returns [orange,mango]

console.log("Need Fruits:",subFruitBasket);
subFruitBasket = fruits.slice(1,3);// returns value of 1,2
console.log("Fruits",subFruitBasket);
subFruitBasket = fruits.slice();//retruns all elements from fruits array
console.log("Fruits",subFruitBasket);




