console.log("************Step1**************");
function voteEligibility(age) {
  if (age <= 0 || age > 100 || age == undefined || age == null) {
    console.log(`This is not valid age: ${age} Please Provide a valid age`);
  }
  if (age > 18 && age < 100) {
    console.log(`Your age is : ${age} so you are eligible for voting`);
  }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);

console.log("************Step2**************");

function gradecalculation(marks) {
  if (marks <= 0 ||marks > 100 ||(typeof marks != "number") ||isNaN(marks) ||marks == undefined ||marks == null) {
        console.log(`This is not valid marks ${marks}:Please provide the valid marks`); 
    } 
    else {
      if (marks>=90) {
        console.log(`Fantastic marks ${marks},Your grade is A+`);
      }
      if (marks >= 75 && marks < 90) {
        console.log(`Excellent marks ${marks}, Your grade is A`);
      }
      if (marks >= 50 && marks < 75) {
        console.log(`Good marks ${marks}, Your grade is B`);
      }
      if (marks >= 35 && marks < 50) {
        console.log(`Marks is ${marks}, Your grade is C, Need improvement`);
      }
    }

    }
gradecalculation(98);
gradecalculation(80);
gradecalculation(90);
gradecalculation(64);
gradecalculation(49);
gradecalculation(35);
gradecalculation(29);
gradecalculation(150);
gradecalculation(-7);
gradecalculation(0);
gradecalculation("91");
gradecalculation("Eighty");
gradecalculation(NaN);
gradecalculation(null);


