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

const mapEnployee=new Map();
mapEnployee.set("22",empAnil);
mapEnployee.set("33",empRadha);
mapEnployee.set("44",empRishi);
mapEnployee.set("55",empSonali);
mapEnployee.set("66",empMonika);
mapEnployee.set("77",empVinay);
mapEnployee.set("88",empMahi)

mapEnployee.forEach((key,value)=>{
    console.log(`${value}==> Name: ${key.empName}, Department: ${key.empDept}, Company: ${key.empCompany}, Salary: ${key.empSalary}`);
})
