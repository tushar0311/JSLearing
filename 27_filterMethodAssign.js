const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log("******** (1) Numbers which are >50*********");
const array1=arrayNumbers.filter((cuurentValue)=>{
    return cuurentValue>50;
});
console.log(array1);

console.log("******** (2) Find even Numbers *********");
const arrayEven=arrayNumbers.filter((cuurentValue)=>{
    return cuurentValue%2==0;
});
console.log(arrayEven);

console.log("******** (3) Find Odd Numbers *********");
const arrayOdd=arrayNumbers.filter((cuurentValue)=>{
    return cuurentValue%2!=0;
});
console.log(arrayOdd);

console.log("******** (4) Find Numbers which are multiple of 5 *********");
const array2=arrayNumbers.filter((cuurentValue)=>{
    return cuurentValue%5==0;
});
console.log(array2);

console.log("******** (5) Find Numbers which are between 20 and 50  *********");
const array3=arrayNumbers.filter((cuurentValue)=>{
    return cuurentValue>20 && cuurentValue<50;
});
console.log(array3);

