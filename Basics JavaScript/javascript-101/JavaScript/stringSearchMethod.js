/*
String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
*/

let str = "Apple cat soon ball in the basement. go and check and come back soon!!"

// String indexOf() -> returns the index(position) of first occurance 
let index = str.indexOf("cat");
console.log('index of cat',index);
// String lastIndexOf() -> returns index of last occurance
let lastIndex = str.lastIndexOf('soon');
console.log("lastIndex of soon:",lastIndex); 
console.log("search index of RAVI",str.lastIndexOf('Ravi')) //returns -1 if not found
// String search() --> searches for a string or regular expression
console.log("search string ravi", str.search("ravi"));//-1
console.log("search cat",str.search('cat') );
// String match()--> returns an array containing the results of matching string against a string or regex
console.log(str.match('at'));
// String matchAll()
console.log(str.matchAll("ats"));
// String includes() --> returns boolean value
console.log(str.includes('go'))
console.log(str.includes('ooj'))
// String startsWith(prefix,startposition)
let indexGO = str.indexOf('go')
console.log("Index of go:", indexGO)
console.log(str.startsWith("go",indexGO))
console.log(str.startsWith("Apple"))
console.log('Appl',str.startsWith("Appl"))
// String endsWith(sufix, number of first characters ends with "Word")
console.log(str.endsWith("soon",14));
console.log(str.endsWith("soon!!"))
