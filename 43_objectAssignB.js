
console.log("****************(1) Create Object bankSbi using literals****************");
const bankSbi={
    bankName:"SBI Bank",
    location:"Shrigonda",
    ifscCode:"SBIN0000295",
    interestRate:"8" 
}
console.log(bankSbi);

console.log("****************(2) Create Object bankLocation using literals****************");
const bankLocation={
    street:"Near Bust Stand",
    city:"Shrigonda",
    pinCode:"413701"
}
console.log(bankLocation);

console.log("****************(3.1) Clone bankSbi and bankLocation objetcs using Object.assign()****************");
const newBankSbi=bankSbi;
console.log(newBankSbi);
const newBankLocation=bankLocation;
console.log(newBankLocation);

console.log("****************(3.2) Clone bankSbi and bankLocation objetcs using Spread Operator ****************");
const newBankSbiSpread={...bankSbi};
const newBankLocationSpread={...bankLocation};
console.log(newBankSbiSpread);
console.log(newBankLocationSpread);

console.log("****************(4) Create Object rateOFInterest using literals ****************");
const rateOFInterest={
    homeLoanInterest:"8.3",
    personalLoanInterrest:"9.4",
    dueInterest:"7.2"
}
console.log(rateOFInterest);

console.log("****************(5) Merge object bankSbi,bankLocation and rateOfInterrest ****************");
const mergeObject={...bankSbi,...bankLocation,...rateOFInterest}
console.log(mergeObject);
console.table(mergeObject);

console.log("****************(6) Traverse object bankSbi,bankLocation and rateOfInterrest ****************");
for (const key in mergeObject) {
    if (Object.hasOwnProperty.call(mergeObject, key)) {
        const element = mergeObject[key];
        console.log(`${key}:${element}`);
        
    }
}




