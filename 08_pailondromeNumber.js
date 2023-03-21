
function palindromeNum(num){
    let temp=num;
    let reverse =0;
    while (num!=0) {
        reverse=(reverse*10)+(num%10);
        num=parseInt(num/10);
    }
    if (temp==reverse){
        return true
    }
    return false
}
let result=palindromeNum(121);
console.log(result);



