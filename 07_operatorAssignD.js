console.log( "(1) Male Marriage Eligibility");
function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} you are not eligible for marriage` ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);
  var result = maleMarriageEligibility("male",17,"Stew Jobs");
  console.log(result);

  console.log("(2) Female Marriage Eligibility");
  function femaleMarriageEligibility(gender, age, girlName){
    var result = (gender=="Female" && age>=18) ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} you are not eligible for marriage` ;
    return result;
  }
  var result = femaleMarriageEligibility("Female",16,"Jenifer");
  console.log(result);
  var result= femaleMarriageEligibility("Female",27,"Malinda Gates");
  console.log(result);