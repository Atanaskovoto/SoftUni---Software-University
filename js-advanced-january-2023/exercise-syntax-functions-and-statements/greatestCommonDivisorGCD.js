function greatestCommonDivisorGCD(num1, num2) {

    const n = Math.min(num1, num2);

    for (let i = n; i > 0; i--) {

        if (num1 % i == 0 && num2 % i == 0) {
            console.log(i);
            break;
        }
    }
}

 greatestCommonDivisorGCD(15, 5);
greatestCommonDivisorGCD(2154, 458);