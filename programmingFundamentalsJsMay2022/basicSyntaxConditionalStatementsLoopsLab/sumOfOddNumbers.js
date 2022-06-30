function sumOfOddNumbers(n) {
    let sum = 0;
    let count = 0
    let currentNumber = 1;

    while (count != n) {
        if (currentNumber % 2 != 0) {
            sum += currentNumber;
            console.log(currentNumber);
            currentNumber++;
            count++;
        } else {
            currentNumber++;
            continue;
        }
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(3);