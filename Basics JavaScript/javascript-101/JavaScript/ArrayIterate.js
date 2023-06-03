/*
forEach(callback, thisArg)
map()
filter()
reduce()
find()
indexOf()
lastIndexOf()
*/
let list = [2,34,5,67,43];
// forEach doesn't return value
let list1 = list.forEach((val,index,array)=>{
    console.log(`${val} is of index ${index} in array ${array}`)
     val *=2;
    // console.log(`${val}`)
})

//map returns value
let list2 = list.map((val,index,array)=>{
    console.log("Val:",val)
    // return val*2;
    val *=2;
})
console.log(list)

console.log("List1:",list1); //no value is returned
console.log("list2:",list2)


//filter()

let filteredList = list.filter((val,index,array)=>{
    return val>29?val:undefined;
})
console.log("filtered list:",filteredList);
