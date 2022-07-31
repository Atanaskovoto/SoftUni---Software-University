function oddAndEvenSum(number) {
    let string = number.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let char of string) {
        let currentNumber = Number(char);
        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(3495892137259234)