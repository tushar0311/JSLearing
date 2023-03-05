function factorialOfNum(num){
    var factorial=1
    for (let index =num ; index >=1; index--) {
        factorial=factorial*index;          
}
    if (num==undefined||num==null||(typeof num!="number")||num==0) {
        return `You entered invalid number "${num}" please entered valid Number`;
    }
    return factorial;
}
var result=factorialOfNum(5)
console.log(`Factorial 5 is: ${result}`);
var result=factorialOfNum(3)
console.log(`Factorial 3 is: ${result}`);
var result=factorialOfNum(null);
console.log(result);
var result=factorialOfNum(8)
console.log(`Factorial 8 is: ${result}`);
var result=factorialOfNum(undefined)
console.log(result);
var result=factorialOfNum(9)
console.log(`Factorial 9 is: ${result}`);
var result=factorialOfNum(0)
console.log(result);
