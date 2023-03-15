console.log("(1) TCS Interview Eligibity");
function tcseligibility(gradScore,hscScore,sscScore,candidateName){
    var result=(gradScore>=70 || hscScore>=80 || sscScore>90)?`Congrats ${candidateName} yor are eligible for TCS Interview`:`Unfortunatly ${candidateName} you are not eligible for TCS interview `;
    console.log(result);
}
tcseligibility(80,86,90,"Tushar");
tcseligibility(70,65,55,"Sagar");
tcseligibility(60,79,88,"Pravin");

