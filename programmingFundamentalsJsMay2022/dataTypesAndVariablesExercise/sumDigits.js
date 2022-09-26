function sumDigits(number) {
    let numToString = String(number);
    let sum = 0;
    for (let i = 0; i < numToString.length; i++)
        sum += Number(numToString[i]);
    console.log(sum);

    // Another solution:

    // let numberToString = String(number);
    // let sum = 0;
    // for (let char of numberToString) {
    //     sum += Number(char);
    // }
    // console.log(sum);
}
sumDigits(245678);