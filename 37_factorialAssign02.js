function factorialWordsCount(word){
   
   var factorial=1
   if (word==null) {
    return `Given string is ${word} inavalid, please entered valid string`;
   }
    for (let index = word.split(" ").length; index >=1; index--) {
        factorial=factorial*index;
   }
   return factorial
}
var result=factorialWordsCount("Revision is the mother of Success");
console.log(`Given string is "Revision is the mother of Success",total number of words is:6, Words factorial is: ${result}`);
var result=factorialWordsCount("We never fail, we always learn");
console.log(`Given string is "We never fail, we always learn",total number of words is:6, Words factorial is: ${result}`);
var result= factorialWordsCount(null);
console.log(result);
var result= factorialWordsCount("");
console.log(`Given string is "", total number of word is 0, word factorial is:${result}`);
var result=factorialWordsCount("Tushar Gorakhnath Borade");
console.log(`Given string is "Tushar Gorakhnath Borade",total number of words is:3, Words factorial is: ${result}`);
