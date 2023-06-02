let str = "This is string";
let str1 = 'This is also "String"';
let str2 = '' //Even this is string
let str3 = "1234"

// Anything surronded by quotes is string.

let spclString = "This is one case wher \"quotes\" is wanted"; // avoid special characters using '\' called escape character

/*
Methods
----------------------------
String length

Extract String Part
    String slice(start,end)
    String substring(start, end)

String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
*/

let randomString = "This string litral will be used as example string for all the methods"


// String length
let strLength = randomString.length 
console.log("Length of string is:", strLength); // 69


// String slice(start,end)
let sliceString = randomString.slice(0,4);
let sliceString2 = randomString.slice(0,10)
console.log('Sliced String:', sliceString); // This
console.log('slice string2:', sliceString2); // This strin [returns till 9th index]
console.log('Experiment:', randomString.slice(2)); // exclude first two characters and prints from index[2]

let negLen = -Math.abs(strLength);
let sliceBackwards = randomString.slice(-11);
let backwards2 = randomString.slice(-15,-1);
console.log("SliceBackword:",sliceBackwards);
console.log("SliceBackward2:",backwards2);

// String substring() --> any character less than 0 or greater than length of string is treated as zero
let subString_ = randomString.substring(0);
console.log("Passed index 0:", subString_); //Retruns complete string
console.log("Passed Negative number:", randomString.substring(-1)); //Takes argument as 0 and returns complete string

let subString_0 = randomString.substring(0,10);
console.log('Index 0 to 10:',subString_0); //This strin

// String replace(pattern,repalcement) [pattern can be string or an object|regex] ---> returns new string and replaces ONLY THE FIRST MATCH
let wrongString = "Thsi is incompleted sentece";
let correction1 = wrongString.replace('Thsi','This');
console.log("Wrong sentence:",wrongString, '\nCorrect sentence:',correction1)

let sampleString = "This repeats word Hello and hello and HELLO again hello and hello and HELLO";
let replaceAll = sampleString.replace(/hello/g,"HOLA!"); 
console.log('/g to replace all hello:' ,replaceAll) // replace all match hello with HOLA!

let sampleString2 = "This is for case insensetive hello, HeLLO, HelLo, HELLO";
let replaceAll2 =  sampleString2.replace(/hello/ig,"HELLO"); //using regex
console.log("/i case insensetive and g for all:",replaceAll2);

// String replaceAll()
let catString = "I love Cats Cats and Cats only!";
let makeYouDogLover = catString.replaceAll("Cats","DOG");
console.log("ReplaceAll method:",makeYouDogLover); 

// String toUpperCase()
let caseStr = "Xyz Small Casewhywhy";
let caseStrUppr = caseStr.toUpperCase();
console.log("Orignal Text:", caseStr);
console.log("Coverted to UPPER CASE:",caseStrUppr);
// String toLowerCase()
let caseStrLower = caseStrUppr.toLowerCase();
console.log("Coverted to lower case:", caseStrLower);


// String concat() -> can be usec as alternative of '+' operator
let str_1 = "Hello";
let str_2 = "WORLD";
let str_3 = str_1.concat(" ",str_2); // first character can be anything
let str_4 = str_1.concat("-----",str_2);
console.log("concatenated string:", str_3);
console.log("concatenated string with char:", str_4);

// String trim()
let trimExample = "    This contains white spaces    ";
let trimedStr = trimExample.trim();
console.log("Before trimming:",trimExample,"\n","After Trim:",trimedStr);
// String trimStart()
let trimInitial = trimExample.trimStart();
console.log("TrimStart:", trimInitial);
// String trimEnd()
let trimLast = trimExample.trimEnd();
console.log("Replacing white space with ';'",trimExample.replaceAll(" ",";"));
console.log("TrimingEnd:",trimLast);


// String padStart()
let samplePadText = "This is Pad Example";
let paddingStart = samplePadText.padStart(3,"X");
console.log("PaddedStart text:", paddingStart);// doesn't happen anything because length of samplePadText > 3
let paddingStart_2 = samplePadText.padStart(samplePadText.length+10,'_');
console.log("Will add '-' till length of smaplePadText == len+ 10:",paddingStart_2);
// String padEnd()
let simpleText = "1";
let completeTen = simpleText.padEnd(10,"0");
console.log("Hope it makes clear:",completeTen);


// String charAt(position) -> return character at given index
let charEx = "HELLO RAVI";
console.log("Fourth character in charEx:",charEx.charAt(4)); //O
// String charCodeAt()
console.log("Unicode of Fourth character in charEx:",charEx.charCodeAt(4)); //79
// String split()
let description = "94xcdfd.google.com:Server name is little weird: port=2343:ddfxx";
let port = description.split(':')[2].split('=')[1]; //splits using a delimeter and retruns array
console.log("PORT:",port); 