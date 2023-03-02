console.log("***************Step1***************");
var numberOfVowels = function(str){
    var count =0
for (let index = 0; index < str.length; index++) {
    var char=str.charAt(index);
    if (char =="a"||char=="e"||char=="i"||char=="o"||char=="u"||char =="A"||char=="E"||char=="I"||char=="O"||char=="U"){
        count=count+1;
    }

}
return count
}

var result=numberOfVowels("JavaScript is the language Of Internet");
console.log(`(1) Given string is:"JavaScript is the language Of Internet"`);
console.log(`Total number of vowels: ${result}`);
var result=numberOfVowels("I am Angular Developer");
console.log(`(2) Given string is:"I am Angular Developer"`);
console.log(`Total number of vowels: ${result}`);
var result=numberOfVowels("Hard work and commitment is the key of success");
console.log(`(3) Given string is:"Hard work and commitment is the key of success"`);
console.log(`Total number of vowels: ${result}`);

console.log("***************Step2***************");

function lastWordCharCount(string){
    var count =0;
    var str=string.trim()
    for (let index =string.length-1 ; index >=0; index--) {
        var char=str.charAt(index);
        if (char==" ") {
            break;  
        }
        count=count+1;
         
    }
    return count
}

var result=lastWordCharCount("JavaScript is the language Of Internet");
console.log(`(1) Total number of char in last word "JavaScript is the language Of Internet" is: ${result} `);
var result=lastWordCharCount("I am Angular Developer");
console.log(`(2) Total number of char in last word "I am Angular Developer" is: ${result} `);
var result=lastWordCharCount("Hard work and commitment is the key of success");
console.log(`(3) Total number of char in last word "Hard work and commitment is the key of success" is: ${result} `);


