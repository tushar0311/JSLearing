console.log("(1) Find Greatest Number");
function greaterNumber(num1,num2){
    
    var result =num1 > num2 ? num1:num2;
    console.log("Greatest Number is:",result);
}
greaterNumber(10,-10)
greaterNumber(800,899)

console.log("(2) Even or Odd Number");
function isEvenOrOddNum(num){
    var result =num%2==0 ? true : false;
    return result
}
var result = isEvenOrOddNum(29);
console.log(` 29 Number is odd: ${result}`);
var result = isEvenOrOddNum(44);
console.log(` 44 Number is odd: ${result}`);
var result = isEvenOrOddNum(0);
console.log(` 0 Number is odd: ${result}`);
var result = isEvenOrOddNum(101);
console.log(` 101 Number is odd: ${result}`);

console.log("(3) Chectout Words Length is Even or Odd:");
function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Developer" has ${wordLength("Developer")} length` );
 console.log(`Word "Google has ${wordLength("Google")} length`);






