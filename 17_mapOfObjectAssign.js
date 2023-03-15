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

console.log("***************(3) Create Map of accountNO and object************");
const mapOfAccountNO=new Map();
mapOfAccountNO.set(axisBank.accountNo,axisBank);
mapOfAccountNO.set(sbiBank.accountNo,sbiBank);
mapOfAccountNO.set(iciciBank.accountNo,iciciBank);
mapOfAccountNO.set(kotakBank.accountNo,kotakBank);
mapOfAccountNO.set(hdfcBank.accountNo,hdfcBank);
mapOfAccountNO.set(panjabBank.accountNo,panjabBank);
console.log(mapOfAccountNO);

console.log("***************(4) Traverse Map with bankName, accountNO and interrestRate************");


const keyofMap=mapOfAccountNO.keys();
for (const key of keyofMap) {
    const element=mapOfAccountNO.get(key);
    console.log(`Bank Name: ${element.bankName}, Account No: ${element.accountNo}, Interest Rate: ${element.interestRate}`);
    
}










