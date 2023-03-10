let sbiBank={
    bankName: "State bank of India",
    location: "Shrigonda",
    accountNo: 32456,
    ifscCode:"SBIN0000295",
    intrestRate:8,
    showDetails: function () {
        console.log(`1) Bank Name:${sbiBank.bankName},2) Location:${sbiBank.location},3) Account Number: ${sbiBank.accountNo},4) IFSC code: ${sbiBank.ifscCode},5) Interest Rate: ${sbiBank.intrestRate}`);
    }
}
console.log("**********************SBI Bank********************************");
sbiBank.showDetails();

let axisBank={
    bankName: "Axis Bank",
    location: "Shrigonda",
    accountNo: 450052,
    ifscCode:"AXISN0000301",
    intrestRate:9,
    showDetails: function () {
        console.log(`1) Bank Name:${axisBank.bankName},2) Location:${axisBank.location},3) Account Number: ${axisBank.accountNo},4) IFSC code: ${axisBank.ifscCode},5) Interest Rate: ${axisBank.intrestRate}`);
    }
}
console.log("**********************Axis Bank********************************");
axisBank.showDetails();



let hdfcBank={
    bankName: "HDFC Bank",
    location: "Shrigonda",
    accountNo: 520035,
    ifscCode:"HDFCN0000309",
    intrestRate:10,
    showDetails: function () {
        console.log(`1) Bank Name:${hdfcBank.bankName},2) Location:${hdfcBank.location},3) Account Number: ${hdfcBank.accountNo},4) IFSC code: ${hdfcBank.ifscCode},5) Interest Rate: ${hdfcBank.intrestRate}`);
    }
}
console.log("**********************HDFC Bank********************************");
hdfcBank.showDetails();

let yesBank={
    bankName: "YES Bank",
    location: "Shrigonda",
    accountNo: 650045,
    ifscCode:"YESN0000410",
    intrestRate:11,
    showDetails: function () {
        console.log(`1) Bank Name:${yesBank.bankName},2) Location:${yesBank.location},3) Account Number: ${yesBank.accountNo},4) IFSC code: ${yesBank.ifscCode},5) Interest Rate: ${yesBank.intrestRate}`);
    }
}
console.log("**********************YES Bank********************************");
yesBank.showDetails();