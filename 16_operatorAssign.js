var java="JavaScript";
var google="Google Chrome";
var developer="Developer Smart";

function string (value1){
    console.log(`Given String is: ${value1}`)
    console.log(`String Length is ${value1}: ${value1.length}`);
    console.log(`String Length Squre is ${value1}: ${value1.length**2}`);
    console.log("************************************");
}
string (java);
string (google);
string (developer);

function squareOfWordLength(value){
console.log(`Given String is ${value}`);
var result =value.length;
console.log(`Given String ${value} Length is:${result}`);
var squre = result*result;
console.log(`Given string ${value} Square is: ${squre}` );
return squre
}
squareOfWordLength("JavaScript")
squareOfWordLength("google chrome")
squareOfWordLength("developer smart")
