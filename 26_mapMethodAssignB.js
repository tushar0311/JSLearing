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

console.log("******(1) List of employee in new array*******");
const array=[empAnil,empRadha,empRishi,empSonali,empMonika,empVinay,empMahi]


const ArrayOfEmpName=array.map((Employee)=>{
    return Employee.empName
})
console.log(ArrayOfEmpName);

console.log("******(2) List of Daprtment*******");
const ArrayOfEmpNames=array.map((Employee)=>{
    return Employee.empDept
})
console.log(ArrayOfEmpNames);

console.log("******(3) List of Employee ID*******");
const ArrayOfEmpNamess=array.map((Employee)=>{
    return Employee.empID
})
console.log(ArrayOfEmpNamess);

console.log("******(4) List of Employee working in TCS*******");
const ArrayOfEmpNamesss=array.filter((Employee)=>{
    return  Employee.empCompany === "TCS"   
}).map((Employee)=>{
    return Employee.empName
})
console.log( ArrayOfEmpNamesss); 