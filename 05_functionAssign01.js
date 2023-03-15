console.log("(1)");
function state(){
    console.log("Maharashtra");
}
state();
function country(){
    console.log("India");
}
country();

console.log("(2)");
function personalDetails (firstName,lastName,collegeName){
    console.log("First Name:",firstName);
    console.log("Last Name:",lastName);
    console.log("College Name",collegeName);
}
personalDetails("Tushar","Borade","DSQIET")

console.log("(3)");

var name1="Virat"
var name2="Anushka"
var sum1=1000
var sum2=2000
function swapValueDude(value1, value2) {
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
   
  }
  var swapResult = swapValueDude(name1, name2); 
 
  var swapResult2=swapValueDude(sum1,sum2)
  
console.log("(4)");
function addThreeValue(num1,num2,num3){
    var sum= num1+num2+num3;
    return sum ;
    
 }
 var sumResult=addThreeValue(10.23,600,40);
 console.log(sumResult);
 var sumResult2=addThreeValue("Hello","Good","Morning")
 console.log(sumResult2);

