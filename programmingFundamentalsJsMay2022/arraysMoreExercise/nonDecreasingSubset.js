function nonDecreasingSubset(input) {
    let maxNumber = 0;

    let rezult = [];

    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i];

        if (currentNumber >= maxNumber) {
            maxNumber = currentNumber;
            rezult.push(maxNumber);
        }
    }
    console.log(rezult.join(' '));
}
nonDecreasingSubset([30, 1, 3, 8, 4, 10, 12, 3, 2, 24]);