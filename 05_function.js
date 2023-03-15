// Function with no arguments and no return value

function showFullName(){
    console.log("My Full Name is:Tushar Gorakhnath Borade");

} 
showFullName();

// Function with  arguments and no return value

function showage(age){
   console.log("My age is:",age);
}
showage(32)

// Function with no arguments and no return value
 
function fullName(){
    var name="Tushar Borade";
    return name;
}
var fullName=fullName();
console.log(fullName);

// Function with arguments and return value

function sumOfNumber(num1,num2,num3){
   var sum= num1+num2+num3;
   return sum;
}
var sumResult=sumOfNumber(10,45,79);
console.log(sumResult);

var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; 
var str2 = "Cutey"; 

var name1= "Akshay";
var name2 = "Sachin";

function swapVariables(value1, value2) {
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
    return "Swapping variables successfully completed";
  }
  var swapResult = swapVariables(num1, num2); // Function call or Function invoke
  console.log(swapResult);
  
  var swapResult2 =  swapVariables(str1, str2);
  console.log(swapResult2);
