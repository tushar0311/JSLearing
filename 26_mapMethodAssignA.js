const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];

console.log("********(1) Add 10 into each element and log the result*********");
const arrayAddTen=arrayNumbers.map((element)=>{
    return element+10
})
console.log(arrayAddTen);

console.log("********(2) Square the each Element and log the result*********");
const arraySquare=arrayNumbers.map((element)=>{
    return element**2
})
console.log(arraySquare);

console.log("********(3) Add the index value into its corresponding element and log the result*********");
const arrayIndex=arrayNumbers.map((element,index)=>{
    return element+index
})
console.log(arrayIndex);


