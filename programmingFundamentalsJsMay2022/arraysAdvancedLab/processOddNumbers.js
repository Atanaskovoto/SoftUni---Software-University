function processOddNumbers(input) {
    let rezult = [];
    let inputLength = input.length;
    for (let index = inputLength - 1; index >= 0; index--) {
        if (index % 2 !== 0) {
            rezult.push(input[index] * 2);
        }
    }
    console.log(rezult.join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);