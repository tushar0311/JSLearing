// Object Litters
let student={
    firstName: "Tushar",
    lastName: "Borade",
    isWorking: false,
    age: 31,
    birthDate: "03 Nov 1991",
    id: 1235,
    address:{
        Strret: "Wakad",
        city:"Pune",
        pin:"431204"
    },
    friends:["Bill","Stew","Elon"],
    show: function(){
        console.log("I am show() function");
    },
    addressDetails: function(){
        this.address
       return `Address is: street ${this.address},city${this.address},pin${this.address}`;
    }
};
let resultAddress=student.addressDetails();
console.log(resultAddress);
student.show()
console.log(student.friends[student.friends.length-1]);
student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}
console.log(student.marks);
student.address.pin="431205";
console.log(student.address.city);
console.log(typeof student.id);
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



