`use strict`;
// myName="Tushar"; //Not allowed
myName="Tushar";
console.log(myName);
//delete myName;//not allowed

//  person={  //Not allowed to defeine an object without var,let and const
//     firstName:"Tushar",
//     lastName:"Borade",
//     age:31
// }


const student={
    rollNo:34,
    age:17,
    city:"PUNE"
}

//delete student;//not allowed in strict mode

function show(arg1,arg2){
    if (arg2==0) {
        arg1/1;
    }
    console.log(arg1/arg2);
}
show(100)