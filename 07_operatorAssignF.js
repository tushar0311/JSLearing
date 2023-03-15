console.log("*******Implicit conversion to String*******");
console.log("(1) Numeric String used with + gives string type");
var result;
result = '3' + 2;
console.log("(1.1)",result);
result = '3' + true;
console.log("(1.2)",result);
result = '3' + undefined;
console.log("(1.3)",result);
result = '3' + null;
console.log("(1.4)",result);

console.log("*******Implicit boolean conversion to Numbar*******");
console.log("(2) If boolean is used, true is 1, false is 0");
var result;
result = '4' - true;
console.log("(2.1)",result);
result = 4 + true;
console.log("(2.2)",result);
result = 4 + false;
console.log("(2.3)",result);

console.log("*******Implicit string conversion to Numbar*******");
console.log("(3) nuemric string used with -,/,* result number type");
var result;
result= '4'-'2';
console.log("(3.1)",result);
result= '4'-2;
console.log("(3.2)",result);
result= '4'*2;
console.log("(3.3)",result);
result= '4'/ 2;
console.log("(3.4)",result);

console.log("*******Undefined used with number,boolean or null given NaN*******");
console.log("(4) Arithmetic operation of undefined with number, boolean or null given NaN");
var result;
result = 4+ undefined;
console.log("(4.1)",result);
result = 4- undefined;
console.log("(4.2)",result);
result = true+ undefined;
console.log("(4.3)",result);
result = null+ undefined;
console.log("(4.4)",result);

console.log("*******Explicit conversion: Convert number string and boolean values to number,in that case we can use Number*******");
console.log("(5) String to Number");
var result;
result = Number('324')
console.log("(5.1)",result);
result = Number('324e-1')
console.log("(5.2)",result);

console.log("(6) boolean to number");
result = Number (true);
console.log("(6.1)",result);
result = Number(false)
console.log("(6.2)",result);

console.log("*******Explicit conversion: Invalid string and Number return NaN*******");
console.log("(7) If a string is an invalied number, the result wil br Nan");
var result;
result=Number ('hello');
console.log("(7.1)",result);
result=Number (undefined);
console.log("(7.2)",result);
result=Number (NaN);
console.log("(7.3)",result);

console.log("(8) Explicit conversion: string and Number using + operator");
var numberInString = "100";
console.log("(8.1)",result);
var myNumber = +numberInString;
console.log("(8.2)",typeof myNumber);

console.log("(9) Explicit conversion: Number and string data type using toString() method");
var myNumber = 100;
console.log("(9.1)" ,typeof myNumber);
var afterCoversion = myNumber.toString();
console.log("(9.2)", typeof afterCoversion);