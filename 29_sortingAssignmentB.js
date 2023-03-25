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
const empRishi=new Employee(44,"Rishi","Finance",47000,"TCS");
const empSonali=new Employee(55,"Sonali","Finance",45000,"Infy");
const empMonika=new Employee(66,"Monuka","IT",40000,"Wipro");
const empVinay=new Employee(77,"Vinayak","IT",75000,"TCS");
const empMahi=new Employee(88,"Mahesh","HR",85000,"Infy");


const array=[empAnil,empRadha,empRishi,empSonali,empMonika,empVinay,empMahi];

console.log("**********(1) Sort The array of Employee by EmpID in ascenending order***********");
const array1=array.sort((emp1,emp2)=>{
   return emp1.empID>emp2.empID? 1:-1
    
}).map((Employee)=>{
    console.log(`Employee ID: ${Employee.empID}, Employee Name: ${Employee.empName}, Employee Department: ${Employee.empDept}`);
})
console.log("**********(2) Sort The array of Employee by EmpDept in ascenending order***********");
const array2=array.sort((emp1,emp2)=>{
    return emp1.empDept>emp2.empDept? 1:-1  
 }).map((Employee)=>{
     console.log(`Employee ID: ${Employee.empID}, Employee Department: ${Employee.empDept}, Employee Company: ${Employee.empCompany}`);
 })
 console.log("**********(3) Sort The array of Employee by EmpSalary in Dscenending order***********");
 const array3=array.sort((emp1,emp2)=>{
    return emp1.empSalary>emp2.empSalary? -1:1  
 }).map((Employee)=>{
     console.log(`Employee Name: ${Employee.empName}, Employee Salary: ${Employee.empSalary}, Employee Company: ${Employee.empCompany}`);
 })










