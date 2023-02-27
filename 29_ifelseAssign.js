console.log("(1) TCS Interview Eligibity");
function tcseligibility(gradScore,hscScore,sscScore,candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>90) {
        console.log(`Congrats ${candidateName} yor are eligible for TCS Interview`);
    } else {
        console.log(`Unfortunatly ${candidateName} you are not eligible for TCS interview `);
    }
    
}
tcseligibility(80,86,90,"Tushar");
tcseligibility(70,65,55,"Sagar");
tcseligibility(60,79,88,"Pravin");