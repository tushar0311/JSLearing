console.log("********(1) Given array*******");
const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log(arrayRollNumbers);

console.log("********(2) Reverse The Array*******");
const arrayreverse=arrayRollNumbers.reverse();
console.log(arrayreverse);

console.log("********(3) Use The Sort Method as it is*******");
const arraySort=arrayRollNumbers.sort();
console.log(arraySort);

console.log("********(4) Sort the array in ascending order*******");
const array1=arrayRollNumbers.sort( (a, b) => { 
    return a>b ? 1 : -1;
} );
console.log(array1); 

console.log("********(5) find the Greatest number from array*******");
const array2=arrayRollNumbers.sort( (a, b) => { 
     return a>b ? -1 : 1;
} ) 
const greatest=array2[0]
console.log(greatest);

console.log("********(6) find the Smalleast number from array*******");
const array3=arrayRollNumbers.sort( (a, b) => { 
    return a>b ? 1 : -1;
} );
const smalleast=array3[0];
console.log(smalleast);

console.log("********(7) Remove Duplicate Array*******");

const arrayDublicate=array3.sort().filter((el,i,a)=>{
    return (i==a.indexOf(el));
});
const arrayDub=arrayDublicate.sort((a, b) => { 
    return a>b ? 1 : -1;
} );
console.log(arrayDub);





