class vehicle{
    constructor(company, model, engine, color, mileage, price ){
        this.company=company;
        this.model=model;
        this.engine=engine;
        this.color=color;
        this.mileage=mileage;
        this.price=price
    }
        
}
console.log("*****************************************************(1.1) 5 Object From vehicle classs************************************************");
const tataVehicle=new vehicle("Tata","Nexon","Petrol","Green","21","5.59 lakh");
console.log(tataVehicle);
const mahindraVehicle=new vehicle("Mahindra","Thar","Petrol","Red","18","15 Lakh");
console.log(mahindraVehicle);
const audiVehicle=new vehicle("Audi","Audi A4","Electric","Blue","15","43.85 Lakh");
console.log(audiVehicle);
const marutiSuzukiVehicle=new vehicle("Maruti-Suzuki","Swift","Disele","White","19","7.56 Lakh");
console.log(mahindraVehicle);
const bmwVehicle=new vehicle("BMW","BMW X5","Petrol","Black","15","17.96 Lakh")
console.log(bmwVehicle);

console.log("*****************************************************(1.2) Traverse Object into Array************************************************");
const arrayOfVehicle = [tataVehicle, mahindraVehicle, audiVehicle, marutiSuzukiVehicle, bmwVehicle ];

for (let index = 0; index < arrayOfVehicle.length; index++) {
    const element = arrayOfVehicle[index];
    console.log(`Vehicle Details: Compay:${element.company}, Model: ${element.model}, Engine: ${element.engine}, Color ${element.color}, Mileage: ${element.mileage}, Prise: ${element.price}`);
}

console.log("*****************************************************(2) 4 Object From college classs************************************************");
class college{
    constructor(collegeName,city,cource,grade){
        this.collegeName=collegeName;
        this.city=city;
        this.cource=cource;
        this.grade=grade;
    }
}
const coep=new college("COEP","Pune","Engineering","A++");
console.log(coep);
const gpn=new college("GPN","Nashik","Diploma","A+");
console.log(gpn);
const dsqiet=new college("DSQIE&T","Sambhajinagar","Engineering and Medicle","A");
console.log(dsqiet);
const Parikrama=new college("Parikrama E & T","Shrigonda","DME & Engineering","A");
console.log(Parikrama);

console.log("*****************************************************(3) Traverse Object with one Argument************************************************");
 
function traverseObject(obj){
    for (const key in obj) {
     if (Object.hasOwnProperty.call(obj,key)) {
         const element = obj[key];  
         console.log(`${key}:${element}`); 
     }   
 }      
}
traverseObject(new college("COEP","Pune","Engineering","A++"));
console.log("**************************************************************************************************************************");
traverseObject(new college("GPN","Nashik","Diploma","A+"));
console.log("**************************************************************************************************************************");
traverseObject(new college("DSQIE&T","Sambhajinagar","Engineering and Medicle","A"));
console.log("**************************************************************************************************************************");
traverseObject(new college("Parikrama E & T","Shrigonda","DME & Engineering","A"));

console.log("*****************************************************(4) Prime Number************************************************");
function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return `prime number`;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return `Prime Number`;  
  }
}

console.log(`The Given 11 number is ${test_prime(11)}`);






    

      


    




