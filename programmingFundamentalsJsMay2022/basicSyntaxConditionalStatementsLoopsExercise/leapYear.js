function leapYear(year) {
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }

    // Another solution:

    // function solve(year) {
    //     let isLeapYear = 'no';
    //     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    //         isLeapYear = 'yes';
    //     }
    //     console.log(isLeapYear);
    // }
}
leapYear(2000)