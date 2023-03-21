console.log("********(1) Log The array element by using forEach () *****************");
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach( function( currentValue, index ) {
    console.log(`Array Element: ${currentValue}, Index: ${index}`);
});

console.log("********(2) Find The Positive Numbers *****************");
let positiveArray=[]
arrayNumbers.forEach((element) => {
    if (element>0) {
        positiveArray.push(element)   
    }  
});
console.log(positiveArray);

console.log("********(3) Find The Negative Numbers ********");
let negativeArray=[]
arrayNumbers.forEach((element) => {
    if (element<0) {
        negativeArray.push(element)   
    }  
});
let show=()=>console.log(negativeArray);
show();

console.log("********(4) Find The Even Numbers *****************");
arrayNumbers.forEach(element => {
    if (element%2==0) {
        console.log(`Even Element: ${element}`);
    }
});

console.log("********(5) Find The sum of all element *****************");
let sum = 0;
arrayNumbers.forEach( (element) => {
    sum = sum + element;
});
console.log(`Sum of All element is: ${sum}`);

console.log("********(6) Log the Even Indexed Array *****************");
arrayNumbers.forEach((element, index) => {
    if (index%2==0) {
        console.log(`Even Index of array is: ${element}`);
    }
});








