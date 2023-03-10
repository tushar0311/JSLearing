let professor={
    firstName:"Rahul",
    lastName:"Shelke",
    Age:42,
    subject:"IMQC",
    City:"Sambhajinagar",
    degrees:{
        Engineering:"CSC",
        PHD:"Adv Computing"
    },
        certificates:["Hacker Rank Participation","Caertificate in IFE cource","Certificate in Adv Programming"],
    degreesDetails:function () {
        this.degrees
        return `Teachers degrees in: ${professor.degrees.Engineering} and,${professor.degrees.PHD} and Total Degrees are 2`;
    }
    
 }


console.log("*************************************");
console.log(`1) Object Professor Propertis are:`);
console.log(professor);
console.log("*************************************");
console.log(`2) Nested Object Degrees are:`);
console.log(professor.degrees);
console.log("*************************************");
console.log(`3) Certificates in array are:`);
console.log(professor.certificates);
console.log("*************************************");
let result=professor.degreesDetails();
console.log(`4) ${result}:`);
console.log("*************************************");
professor.totalExperience="14 Years"
console.log(`5) Total experienec is:${professor.totalExperience} `);
console.log("*************************************");
professor.subject="Angular";
console.log(`6) After Modify Subject the Object is:`);
console.log(professor);
console.log("*************************************");
professor.certificates.push("Oracle Certified");
console.log(`7) After Adding new certicicate Oracle Certified the array is:`);
console.log(professor.certificates);
console.log("*************************************");
console.log(`8) Last Element of array is: ${professor.certificates[professor.certificates.length-1]}`);













