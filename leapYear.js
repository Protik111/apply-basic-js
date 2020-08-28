// const year = 2022;
// let remainder = year % 4;
// if(remainder==0){
//     console.log('Your year is a leap year');
// }else{
//     console.log('Your year is not leap year');
// }

function isLeapYear(year){
    if (year % 400 == 0){
        return true;
    }else if(year %4 == 0 && year%100 != 0){
        return true;
    }else{
        return false;
    }
}

const leapYear = isLeapYear(2020);
console.log(leapYear);