console.log("**********************************************(1) Counstructor Function*****************************************************");
function Bank(bankName,location,ifscCode,branchCode){
    this. bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
    this.show=function(){
        console.log(`Bank Details is: ${this.bankName},${this.location},${ifscCode},${branchCode}`);

    }
    
}
const yesBank=new Bank("Yes Bank","Shrigonda","YESB000095","1585");
yesBank.show();
const sbiBank=new Bank("SBI Bank","Shrigonda","SBIN0000295","2701");
sbiBank.show();
const mahBank=new Bank("Mahrastra Bank","Shrigonda","MAHN0000255","3050");
mahBank.show();
const axisBank=new Bank("Axis Bank","Shrigonda","AXISN0000265","1205");
axisBank.show();

console.log("**********************************************(2) Prototype Object*****************************************************");

Bank.prototype.openTime="9 AM IST";
Bank.prototype.closeTime="6 PM IST";
console.log(`Open Time: ${sbiBank.openTime} and close Time: ${sbiBank.closeTime} of object sbiBank`);
console.log(`Open Time: ${axisBank.openTime} and close Time: ${axisBank.closeTime} of object axisBank`);
console.log(`Bank Name: ${yesBank. bankName}, Branch Code: ${yesBank.branchCode}, and Open Time: ${yesBank.openTime} `);






