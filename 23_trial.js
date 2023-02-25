function stringCut() {
    var open = `i_am_talking_about_our_future_idea's.:_5G_Broadbend`;
    var stringLenth = open.length;
    var stringNumber = stringLenth % 2 == 0 ?`we will get EVEN Number`:`we will get ODD Number`;
    var SubString = open.substring(stringNumber);
    return SubString;
  }
  var result = stringCut();
  console.log(result);

  if (gender == "Male" && age >= 21) {
    console.log(`Hey ${boyName} you are eligible for marriage`);
  }
   else {
    console.log(`Hey ${boyName} you are not eligible for marriage`);
  }