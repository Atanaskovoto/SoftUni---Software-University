function specialNumbers(input) {
    let number = Number(input[0]);
    let magicNumbers = '';


    for (let a = 1111; a <= 9999; a++) {
        let currentNumber = String(a)
        let counter = 0;
        let magicDigit = '';
        for (let b = 0; b < currentNumber.length; b++) {
            let currentDigit = Number(currentNumber[b]);
            if (number % currentDigit === 0) {
                magicDigit += currentDigit;
                counter++;
            }
        }
        if (counter === 4) {
            magicNumbers += `${magicDigit} `;
        }
    }
    console.log(magicNumbers);
}
specialNumbers(["3"]);