const array = [3, 4, 5, 8, 90, 50, 1, 44, 78, 51 ];
let sumOfArrayElement = array.reduce( (runningTotal, value) => {
    return runningTotal+value;
} );
console.log(sumOfArrayElement);


// Find the even numbers from the given array and sum it
const arrayEven = array.filter( (element) => {
    return element%2==0;
} );
console.log(arrayEven);
const sumEven  = arrayEven.reduce( (runningTotal, value) => {
    return runningTotal+value;
} );
console.log(sumEven);

const arrayNum = [3, 4, 12, 8, 90, 50, 1, 15, 78, 21 ];
// Find the numbers which are multiple of 3 from the given array and sum it
console.log(" Find the numbers which are multiple of 3 from the given array and sum it");
const sum = arrayNum.filter( (element)=> {
   return element%3==0;
}).reduce( (runningTotal, value) => {
    return runningTotal + value;
} );
console.log(sum);

// Find the numbers which are multiple of 3 from the given array and sum it
console.log(" Find the numbers which are multiple of 3 from the given array and sum it");
const sumMultipleOf3 = arrayNum.filter( element => element%3==0)
.reduce( (runningTotal, value) => runningTotal + value);
console.log(sum);

const arrayOfNames = ["Elon", "Ratan", "Billgates","PT Usha", "Murmu"];
console.log(arrayOfNames);
console.log("========= After sorting=========");
const sortedArray = arrayOfNames.sort();
console.log(sortedArray); // Sorting in ascending order
sortedArray.reverse(); // Sorting in Descending order
console.log(sortedArray);

console.log("======= Sorting array of numbers =========");
const array1 = [5, 6, 3, 44, 104, 302, 15];// 
console.log(array1);
// Custom sorting to sort the elements in ascending order
array1.sort( (a, b) => { // 3  6
    return a>b ? 1 : -1;
} );
console.log(array); // 
// Custom sorting to sort the elements in descending order
const arrayNum1 = [56, 3, 4, 78, 23, 32]
arrayNum1.sort( (a, b) => { // 3  6
    return a>b ? -1 : 1;
} );
console.log(arrayNum1);


//sort and length-2