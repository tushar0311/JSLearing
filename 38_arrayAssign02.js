console.log("****************************************");
var  arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`**The Given Array is "20,31,40,25,23,11,29,9,60,2,11"**`);
console.log("****************************************");
var  arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
let totalElement=arrayNumbers.length;
console.log(`1) Total Number of Elemnet is: ${totalElement}`);

console.log("****************************************");
let firtArray=arrayNumbers[0];
console.log(`2-a) First Element is:${firtArray}`);
let lastArray=arrayNumbers.length-1;
console.log(`2-b) Last Element is:${lastArray}`);

console.log("****************************************");
let lastThird = arrayNumbers[arrayNumbers.length-3];
console.log(`3) The Last Third element is:${lastThird}`);

console.log("****************************************");
let even = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2 === 0) {
      even.push(arrayNumbers[index]);
    }
  }
console.log(`4) Even Numbers are: ${even}`);
    
console.log("****************************************");
let odd = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2!= 0) {
      odd.push(arrayNumbers[index]);
    }
  }
console.log(`5) Odd Numbers are: ${odd}`);

console.log("****************************************");
let evenPosition=[]
for (let index = 0; index < arrayNumbers.length; index++){
 if (index%2==0) {
    evenPosition.push(arrayNumbers[index]); 
 }

}
console.log(`6-a) Even Position Element are: ${evenPosition}`)
let sum=0
for (let index = 0; index < evenPosition.length; index++){
    const element = evenPosition[index];
    sum=sum+element;

} 
console.log(`6-a) Sum of Even Position is: ${sum}`);

console.log("****************************************");
let oddPosition=[]
for (let index = 0; index < arrayNumbers.length; index++){
 if (index%2!=0) {
    oddPosition.push(arrayNumbers[index]); 
 }
 }
console.log(`7-a) ODD Position Element are: ${oddPosition}`)
let sumodd=0
for (let index = 0; index < oddPosition.length; index++){
    const element = oddPosition[index];
    sumodd=sumodd+element;
} 
console.log(`7-a) Sum of ODD Position is: ${sumodd}`);

console.log("****************************************");
let sumOfAll=0
for (let index = 0; index < arrayNumbers.length; index++){
    const element = arrayNumbers[index];
    sumOfAll=sumOfAll+element;
} 
console.log(`8) Sum of All Element is: ${sumOfAll}`);

console.log("****************************************");
let multiple=[]
for (let index = 0; index < arrayNumbers.length; index++){
    if (arrayNumbers[index] %5== 0) {
        multiple.push(arrayNumbers[index]);
      }
} 
console.log(`9) Numbers which multiple of 5 is: ${multiple}`);

console.log("****************************************");
const is115Available = arrayNumbers.includes(115);
console.log(`10) Is 115 available: ${is115Available} `);

console.log("****************************************");
const is23Available = arrayNumbers.includes(23);
console.log(`11) Is 23 available: ${is23Available} `);

console.log("****************************************");
arrayNumbers.splice(3,0,55,66);
console.log(`12) After Addind 55 and 66 the array is: ${arrayNumbers}`);

console.log("****************************************");
arrayNumbers.splice(4,3);
console.log(`13) After Removing 3 Element starting from index 4 the array is: ${arrayNumbers} `);






