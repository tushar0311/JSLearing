console.log("(1)");
function stringHandsOn(){
    console.log("     Hey You are doing good, keep it up      ");
}
stringHandsOn()


console.log("(2) Length of String");
var greet="     Hey You are doing good, keep it up      ";
var greetLength= greet.length
console.log(greetLength);

console.log("(3)");
var greet="     Hey You are doing good, keep it up      ";
var greetTrim=greet.trim();
console.log("Removing extra Leading and trailing extra spaces: ",greetTrim)
console.log(greetTrim.length);
console.log("(4) Spaces Count");
var count=greet.length-greetTrim.length;
console.log(count);

console.log("(5)");

var greetTrim1=greetTrim.charAt(0);
console.log("First Character is:",greetTrim1);
var greetTrim1=greetTrim.charAt(33);
console.log("Last Character is:",greetTrim1);
console.log("(6)Total Words:");
var splitResult=greetTrim.split(" ");
console.log(splitResult.length);

console.log("(7)Index of Word is:");
var indexOdM=greet.indexOf("g");
console.log(indexOdM);

console.log("(8)");
console.log("Substring Satarting from index 22 using substring is:",greet.substring("22"));

console.log("Substring starting from index 22 using slice is: ",greet.slice("22"));

console.log("(9)");
console.log("Is string endswith word up:",greet.includes("up"));

console.log("(10)");
console.log("Is string Start with word hey after trimimg:",greetTrim.includes("Hey"));


