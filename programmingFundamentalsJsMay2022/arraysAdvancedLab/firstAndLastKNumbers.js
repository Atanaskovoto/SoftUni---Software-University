function firstAndLastKNumbers(input) {
    let end = input[0] + 1;
    let start = -input[0];
    let arrayOne = input.slice(1, end)
    let arrayTwo = input.slice(start)
    console.log(`${arrayOne.join(' ')}\n${arrayTwo.join(' ')}`);
}
firstAndLastKNumbers([3, 6, 7, 8, 9]);