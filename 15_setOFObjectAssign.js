class Bank {
    constructor(bankName,location,accountNo,ifsc,interestRate){
        this.bankName=bankName,
        this.location=location,
        this.accountNo=accountNo,
        this.ifsc=ifsc,
        this.interestRate=interestRate
    }
}
console.log("***************(1 and 2) Create class Bank and Objects************");
const axisBank=new Bank("Axis Bank","Shrigonda","557702","AXISN0000255","8");
console.log(axisBank);
const sbiBank=new Bank("SBI Bank","Shrigonda","423222","SBIN0000295","9");
console.log(sbiBank);
const iciciBank=new Bank("ICICI Bank","Shrigonda","665544","ICICIN0000267","10");
console.log(iciciBank);
const kotakBank=new Bank("Kotak Bank","Shrigonda","887766","KOTAKN0000245","11");
console.log(kotakBank);
const hdfcBank=new Bank("HDFC Bank","Shrigonda","443322","HDFCN235","9.2");
console.log(hdfcBank);
const panjabBank=new Bank("PNB Bank","Shrigonda","776655","PNBN0000285","8.5");
console.log(panjabBank);

console.log("***************(3) Create set of object************");
const setOfObject=new Set();
setOfObject.add(axisBank);
setOfObject.add(sbiBank);
setOfObject.add(iciciBank);
setOfObject.add(kotakBank);
setOfObject.add(hdfcBank);
setOfObject.add(panjabBank);
console.log(setOfObject);

console.log("***************(4) Traverse set with bankName and location************");
for (const element of setOfObject) {
    console.log(`Bank Name: ${element.bankName}, Location: ${element.location}`);
    
}