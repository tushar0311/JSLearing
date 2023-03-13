class Bank {
    constructor(bankName, location, account, ifsc, interestRate){
        this. bankName=bankName;
        this. location=location;
        this. account=account;
        this. ifsc=ifsc;
        this. interestRate=interestRate;
    }
    showDetails(){
        console.log(`Bank Details: ${this.bankName} ${this.location} ${this.account} ${this.ifsc} ${this.interestRate} `);
    }
}


class Person {
    constructor(fullName, city){
        this.fullName = fullName;
        this.city = city;
    }
}
const personDhoni = new Person("MS Dhoni", "Ranchi");
const personShubham = new Person("Shubham Gill", "Mumbai");

console.log(personDhoni instanceof Person);
console.log(personShubham instanceof Bank);
console.log(sbiBank instanceof Bank);
