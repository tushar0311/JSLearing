var checkLeapYear=function (leapYear){
    if (leapYear==undefined || leapYear==null || (typeof leapYear!="number") || isNaN (leapYear) ){
        console.log(`${leapYear} is not Leap year, Please Provied Valid Year`);
    }else{
        if (0==leapYear%4) {
            console.log(`${leapYear} is Leap year`);
        } else {
            console.log(`${leapYear} is not Leap year`);
        }

    }
    
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
