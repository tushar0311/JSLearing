function isprime(num){
    for (let index = 2; index < num; index++) {
        if (num%index==0){
            return false

        }
        return true
    }
}
let result= isprime(11);
console.log(`Is 11 is prime Number:${result ? "Yes":"No"}`);

function primeNumbers(num1){
    let count=0;
    let num=num1;
    const arrayOfPrime=[];
    while (count<num1) {
        let isPrimeNums=isprime(num);
        if(isPrimeNums){
            count++;
            arrayOfPrime.push(num);
        }
        num++

    }
    console.log(arrayOfPrime);
}
primeNumbers(10)