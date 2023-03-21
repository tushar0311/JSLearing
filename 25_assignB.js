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
console.log(empAnil);
const empRadha=new Employee(33,"Radha","HR",74000,"Wipro");
console.log(empRadha);
const empRishi=new Employee(55,"Rishi","Finance",47000,"TCS");
console.log(empRishi);
const empSonali=new Employee(66,"Sonali","Finance",45000,"Infy");
console.log(empSonali);
const empMonika=new Employee(77,"Monuka","IT",40000,"Wipro");
console.log(empMonika);
const empVinay=new Employee(88,"Vinayak","IT",75000,"TCS");
console.log(empVinay);
const empMahi=new Employee(99,"Mahesh","HR",85000,"Infy");
console.log(empMahi);

console.log("********************************(2) Add object in Array************************ ");
const arrayOfObject =[empAnil,empRadha,empRishi,empSonali,empMonika,empVinay,empMahi];
console.log(arrayOfObject);

console.log("********************************(3) Find the Employee working in TCS************************ ");
for  (const element of arrayOfObject) {
    if(element.empCompany=="TCS"){
        console.log(`Emploee Name:${element.empName} and Emploee Comapnay: ${element.empCompany}`);
    }
   
    
}

console.log("********************************(4) Find the Employee working in Finace department************************ ");
for (const element of arrayOfObject) {
    if (element.empDept=="Finance") {
        console.log(`Employee Department: ${element.empDept} and Employee Name: ${element.empName}`);    
    }  
}

console.log(`********************************(5) Find the Employee whose name is start from "R" ************************ `);
for (const element of arrayOfObject) {
    if (element.empName.startsWith("R")) {
        console.log(`Employee Details: Employee ID: ${element.empID}, Employee Name:${element.empName}, Employee Department:${element.empDept}, Employee Salary:${element.empSalary}, Employee Company:${element.empCompany}`);
    }
    
}

console.log(`********************************(6) Find the Employee whose salary is greater than 75000 ************************ `);
for (const element of arrayOfObject) {
    if (element.empSalary>75000) {
        console.log(`Emploee Name:${element.empName}, Emploee Comapnay: ${element.empCompany} and Employee Salary:${element.empSalary}`);
        
    }
    
}

console.log(`********************************(7) Find the Employee whose salary is greater than and equal to 50000 and Dapartment is IT  ************************ `);
for (const element of arrayOfObject) {
    if (element.empSalary>=50000 && element.empDept=="IT") {
         console.log(`Employee Details: Employee ID: ${element.empID}, Employee Name:${element.empName}, Employee Department:${element.empDept}, Employee Salary:${element.empSalary}, Employee Company:${element.empCompany}`);
    }
}

console.log(`********************************(8) Find out all the employee from Infy  ************************ `);
for (const element of arrayOfObject) {
    if (element.empCompany=="Infy") {
        console.log(`Employee Details: Employee ID: ${element.empID}, Employee Name:${element.empName}, Employee Department:${element.empDept}, Employee Salary:${element.empSalary}, Employee Company:${element.empCompany}`);  
    }  
}


