// Object Litters
let student={
    firstName: "Tushar",
    lastName: "Borade",
    isWorking: false,
    age: 31,
    birthDate: "03 Nov 1991"
};
console.log(student);
console.log(typeof student);
// . Dot Notation
console.log(student.firstName); 
// [] Notation
console.log(student["lastName"]);
// Update Property
student.collegeName="COEP Pune"
console.log(student.age);
// Add New Property
student.city="Shrigonda";
student.country="India";
delete student.isWorking;
console.table(student);

// Empty Object
let teacher={};
teacher.firstName="Tushar";
console.log(teacher);



