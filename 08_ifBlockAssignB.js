console.log( "(1) Male Marriage Eligibility");
function maleMarriageEligibility(gender, age, boyName) {
    if (gender == "Male" && age >= 21) {
      console.log(`Hey ${boyName} you are eligible for marriage`);
    } else {
      console.log(`Hey ${boyName} you are not eligible for marriage`);
    }
  }
  maleMarriageEligibility("Male", 25, "Billgates");
  maleMarriageEligibility("Male", 17, "Stew Jobs");

   console.log( "(2) Female Marriage Eligibility");
function femaleMarriageEligibility(gender, age, Girlname) {
    if (gender == "Female" && age >= 18) {
      console.log(`Hey ${Girlname} you are eligible for marriage`);
    } 
    else {
      console.log(`Hey ${Girlname} you are not eligible for marriage`);
    }
  }
  femaleMarriageEligibility("Female",16,"Jenifer");
  femaleMarriageEligibility("Female",27,"Malinda Gates");

 
  
