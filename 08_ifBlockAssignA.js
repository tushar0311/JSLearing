

console.log("(1) Even or Odd Assignment");
function checkEvenOdd(num) {
    if (num % 2 == 0) {
      return "EVEN";
    }
    if (num % 2 != 0) {
      return "ODD";
    }
  }
  var result = checkEvenOdd(45);
  console.log(`Given Number 45 is ${result}`);
  var result = checkEvenOdd(70);
  console.log(`Given Number 70 is ${result}`);
  var result =checkEvenOdd(67);
  console.log(`Given Number 67 is ${result}`);
  var result = checkEvenOdd(98);
  console.log(`Given Number 98 is ${result}`);

  console.log("(2) Eligible or not for Voting Assignment");
  function ageForVote (age){
    if (age >= 18) {
        console.log(`Age of ${age} is eligible for voting`);
    } 
    else {
        console.log(`Age of ${age} is not eligible for voting`);
    } 
}
ageForVote(18);
ageForVote(20);
ageForVote(17);
ageForVote(40);

console.log("(3)");

  var java="JavaScript ES6"
  var result = java.length 
  if (result >= 10) {
    console.log(`The Given String : ${java} containes more than 10 character`);
} else {
    console.log(`The Given String : ${java} containes not more than 10 character`);
}
console.log("(4)");
var java ="JavaScript Langauge";
var result= java.includes("Java")
if (result = true ) {
  console.log(`Yes Given Given JavaScript Languge is Starts with Java `);
} else {
  console.log(`Yes Given JavaScript Languge is not Starts with Java `);
}









