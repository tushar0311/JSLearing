let student={
    firstName:"Tushar",
    lastName:"Borade",
    isWorking:true,
    age:31,
    collegeName:"DSQIET",
    id:"BQX4007"
}
// let isWorkingStd=student.isWorking;
// let ageStd=student.age;
// let collageNameStd=student.collegeName;
let{firstName,isWorking,age,collegeName,id,city="pune"}=student
console.log(`Extracted values from object is: ${isWorking}, Age ${age}, College Name ${collegeName},Id ${id},City ${city}`);

// Array Destructuring
const array=[5,6,7,8];
let [num1,num2,num3,num4,num5=0,num6]=array
console.log(num1,num2,num3,num4,num5,num6);

