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

console.log("******(1) Find all employees from TCS*******");
const array=[empAnil,empRadha,empRishi,empSonali,empMonika,empVinay,empMahi];
const array1=array.filter((Employee)=>{
    return  Employee.empCompany === "TCS"   
}).map((Employee)=>{
    return `EMployee Name: ${Employee.empName}, Employee Comapny: ${Employee.empCompany}`
})
console.log(array1);

console.log("******(2) Find average salary of employees from Wipro*******");
let sum=0
let averageSal=0
const array2=array.filter((element)=>{
    if(element.empCompany=="Wipro"){ 
        sum= sum+element.empSalary
        averageSal=sum/2     
} 
})
console.log(averageSal); 

console.log("******(3) Find average salary of employees from Wipro and infy*******");
let sums=0
let averageSala=0
const array3=array.filter((element)=>{
    if(element.empCompany=="Wipro"||element.empCompany=="Infy"){ 
        sums= sums+element.empSalary
        averageSala=sums/4     
} 
})
console.log(averageSala); 



 









