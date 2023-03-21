console.log("******************(1) Arrow Function With no Args and No return Value***************");

let show=()=>console.log(" Good Morning, Today is Monday");
show();

console.log("******************(2) Arrow Function With Args and No return Value***************");
let multiplyValue=(num1,num2,num3)=>console.log(`(A) Multiplication of 3 Numbers: ${num1*num2*num3}`);
multiplyValue(5,5,2);
let multiplyValues=(num1,num2,num3=1)=>console.log(`(B) After Assign default Value in Num3 Multiplication is: ${num1*num2*num3}`);
multiplyValues(10,4)

console.log("******************(3) Arrow Function With Args and return Value***************");
let additions=(num1,num2,num3,num4,num5)=> {
    const result=num1+num2+num3+num4+num5;
    return result

}
let res=additions(100,100,200,349,756);
console.log(`(A) Addition of value passed is: ${res}`);
let ress=additions("I am", " Learning", " ES6", " features", " in depth")
console.log(`(B) After Invoke same arrow function: ${ress}`);
