console.log("****************(1.1) Perfrom shallow clone on array arrayNums**************** ");
const arrayNums=[20,3,4,56,90,400,49];
const newArrayNum=arrayNums;
console.log(newArrayNum);

console.log("****************(1.2) Update clone array with value 55,66 using shallow clone**************** ");
newArrayNum.push(55,66);
console.log(newArrayNum);

console.log("****************(2) log origional array using spread operator and update newArray with value 10,25 at last position  **************** ");
const newArray=[...arrayNums];
console.log(newArray);
newArray.push(10,25);
console.log(newArray);

console.log("****************(3) Merge array using spread operator **************** ");
const arrayEven=[2,30,14,8];
console.log(`Array Even: ${arrayEven}`);
const mergeArray=[...arrayEven,...arrayNums]
console.log(`Merge Array: ${mergeArray}`);

console.log("****************(4) and (5.1) Create and log emploee info **************** ");
const emploeeInfo={
    empID:27,
    empname:"John Doe",
    salary:{
        julyMonths:"40,0000INR",
        augMonths:"50,0000INR",
        juneMonths:"65,0000INR"   
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokali,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 77"]
}
console.log(`Emploee Detais: Locality: Colony: ${emploeeInfo.address.locality.colony}, Street: ${emploeeInfo.address.locality.street}, City: ${emploeeInfo.address.city}, State: ${emploeeInfo.address.state}, Country: ${emploeeInfo.address.country}`);

console.log("****************(5.2) log MObile Number **************** ");
console.log(`Mobile Numbers: ${emploeeInfo.mobiles}`);

console.log("****************(6) Perform deep copy using JSON stringfy() **************** ");
console.log(`****************(6.1) Update Property "julyMonth salary 80k" **************** `);
const newEmpInfo = JSON.parse(JSON.stringify(emploeeInfo));
newEmpInfo.salary.julyMonths="80,0000INR";
console.log(`Updated Salary julyMonths: ${newEmpInfo.salary.julyMonths}`);
console.log(`****************(6.2) Update Property "country to united kingdom" **************** `);
const newcountry = JSON.parse(JSON.stringify(emploeeInfo));
newcountry.address.country="United Kingdom";
console.log(`Updated country: ${newcountry.address.country}`);
console.log(`****************(6.3) Log updated value for rigional and clone object **************** `);

console.log(`Original salary julyMonths: ${emploeeInfo.salary.julyMonths} and Updated Salary julyMonths: ${newEmpInfo.salary.julyMonths}`);
console.log(`Original Country: ${emploeeInfo.address.country} and Updated country: ${newcountry.address.country}`);





