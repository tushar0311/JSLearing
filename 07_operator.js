console.log(`==== Arithmetic Operator =====`);
var num1=10;
var num2=2;
var result=num1+num2;

console.log(`Adition is ${result}`);

result=num1-num2;
console.log(`subtraction is ${result}`);

result=num1*num2;
console.log(`Multification is ${result}`);

result=num1**num2;
console.log(`Exponential is ${result}`);

result=num1/3;
console.log(`Division is ${result}`);

result=num1%3  //Modulus
console.log(`Reminder is ${result} `);
var num = 10; // Compound addition +=
 num+=20; // num = num + 20
 console.log(`Compound addition += ${num}`);

 console.log(`caparsion operators`);
 var num3=10;
 console.log(num3==10);
 console.log(num3==11);

 console.log(`caparsion operators`);
 var num3="10";
 var num4=10
 console.log(num3==num4);
 console.log(num3===num4);//Strictely Equal
 
 console.log(num3!=num4);//! is Mean Not
 console.log(10 > 20);//> Greater Than
 console.log(20 < 10 ); //< Less Than
 console.log(10 < 10);

 var marks=35;
 console.log(marks > 35); //< Less Than
 // Is marks greater than 35
 console.log(marks >= 35);
 // Is marks greater than equal 35
 console.log(marks <= 35);
 // Is marks greater than equal 35


 var marks=70;
 var result=marks>=60 ?"Allow him for interview": "Dont Allow";
 console.log(result);

 var age=20;
 var res=age>= 21 ? true:false;
 console.log(res);

 console.log("Even Or Odd");
 var myNumber=8;
 var result = myNumber%2==0 ?"Even":"Odd";
 console.log(result);


 function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );

 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);