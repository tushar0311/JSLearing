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



console.log("(1) Find out The TCS Employee details");
arrayOfObject.forEach(employee => {
    let empCompany=employee.empCompany
    if (empCompany=="TCS") {
        console.log(`Employee Name: ${employee.empName} and Employee Comapy ${empCompany} `);
    }
});

console.log("(2) Find the Employee with salary is greater than or equal to 50000");
arrayOfObject.forEach(element => {
    let empSalary=element.empSalary
    if (empSalary>=50000) {
        console.log(`Employee Details: Employee ID: ${element.empID}, Employee Name:${element.empName}, Employee Department:${element.empDept}, Employee Salary:${element.empSalary}, Employee Company:${element.empCompany}`);
        
    }
    
});

console.log("(3) Find the total of employee Salary");
let sum = 0;
arrayOfObject.forEach(employee => {
    if(employee.empSalary) {
        sum = sum + employee.empSalary; 
    }
});
console.log(` The total of employee Salary is: ${sum}`);

console.log("(4) Find the Average employee Salary");
let sums=0
let averageSal=0
arrayOfObject.forEach(employee => {
    if(employee.empSalary)
    sums = sums + employee.empSalary;
     averageSal=sums/arrayOfObject.length

});
console.log(`Average employee Salary is: ${averageSal}`);

console.log("(5) Find the IT or HR department employee, salary >=75000");
arrayOfObject.forEach(element => {
    let empSalary=element.empSalary 
    let empDept=element.empDept
    if (empDept=="IT"||"HR", empSalary>=75000) {
        console.log(`Employee Details: Employee ID: ${element.empID}, Employee Name:${element.empName}, Employee Department:${element.empDept}, Employee Salary:${element.empSalary}, Employee Company:${element.empCompany}`);
        
    }
    
});









