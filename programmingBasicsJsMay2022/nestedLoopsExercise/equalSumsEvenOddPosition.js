function equalSumsEvenOddPosition(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let result = '';

    for (let a = n1; a <= n2; a++) {
        let currentNumber = String(a);
        let oddSum = 0;
        let evenSum = 0;

        for (let b = 0; b < currentNumber.length; b++) {
            let currentDigit = Number(currentNumber[b]);

            if (b % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            result += `${currentNumber} `;
        }
    }
    console.log(result);
}
equalSumsEvenOddPosition(["123456",
"124000"])

