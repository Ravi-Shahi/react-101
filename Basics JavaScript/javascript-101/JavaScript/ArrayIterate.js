/*
forEach(callback, thisArg)
map(callback(value,index,array))
filter(callback(value,index,array))
reduce()
find()
indexOf()
lastIndexOf()
*/
let list = [2, 34, 5, 67, 43];
// forEach doesn't return value
let list1 = list.forEach((val, index, array) => {
  console.log(`${val} is of index ${index} in array ${array}`);
  val *= 2;
  // console.log(`${val}`)
});

//map returns value
let list2 = list.map((val, index, array) => {
  console.log("Val:", val);
  // return val*2;
  val *= 2;
});
console.log(list);

console.log("List1:", list1); //no value is returned
console.log("list2:", list2);

//filter()

let filteredList = list.filter((val, index, array) => {
  return val > 29 ? val : undefined;
});
console.log("filtered list:", filteredList);

//filter name starts with ...
const staff = [
  {
    name: "Ratnesh",
    age: 22,
    profile: "Manager",
  },
  {
    name: "Nikhil",
    age: 26,
    profile: "Captain",
  },
  {
    name: "Sikha",
    age: 22,
    profile: "HOD",
  },
];

const promotion = staff.filter((item) => item.name.toLowerCase().includes("n"));

console.log(promotion);
