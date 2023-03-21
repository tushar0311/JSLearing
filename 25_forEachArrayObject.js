console.log("********************************(1) Created Object in Class************************ ");
class Employee{
    constructor(empID,empName,empDept,empSalary,empCompany){
        this.empID=empID;
        this.empName=empName;
        this.empDept=empDept;
        this.empSalary=empSalary;
        this.empCompany=empCompany;
    }

}
const empAnil=new Employee(22,"Anil","IT",50000,"TCS");

const empRadha=new Employee(33,"Radha","HR",74000,"Wipro");

const empRishi=new Employee(55,"Rishi","Finance",47000,"TCS");

const empSonali=new Employee(66,"Sonali","Finance",45000,"Infy");

const empMonika=new Employee(77,"Monuka","IT",40000,"Wipro");

const empVinay=new Employee(88,"Vinayak","IT",75000,"TCS");

const empMahi=new Employee(99,"Mahesh","HR",85000,"Infy");


const arrayOfObject =[empAnil,empRadha,empRishi,empSonali,empMonika,empVinay,empMahi];
console.log(arrayOfObject);

console.log("Find the employees whose name start with R....");
arrayOfObject.forEach(employee => {
    let empName = employee.empName;
    if (empName.startsWith("R")) {
        console.log(employee);
    }
});

console.log("Infy employees total salary");
let totalSalaryOfInfy = 0;
arrayOfObject.forEach(employee => {
    if(employee.empCompany=="Infy") {
        totalSalaryOfInfy = totalSalaryOfInfy + employee.empSalary; 
    }
});
console.log(totalSalaryOfInfy);