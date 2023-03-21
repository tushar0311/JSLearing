// Arrow function with no arg and no return value
let show=()=>{
    console.log("Arrow Function");
}
show()

//Arrow Short
let shows=()=>console.log("Arrow Function");
shows();



// Arrow Function with arg and no retrun value
let add=( num1,num2)=>{
console.log(num1+num2);
}
add(10,20)

// Arrow Function with arg and retrun value
let multiply=(num1,num2)=>{
const result=num1*num2
return result
}
let res=multiply(40,5);
console.log(res);

//Arrow fuction Short
let multiplyRes=(num1,num2)=>num1*num2;
console.log(multiplyRes(30,5));
