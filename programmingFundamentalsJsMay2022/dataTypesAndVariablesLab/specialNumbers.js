function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let currnetNumber = i;
        let numToString = String(currnetNumber);
        let sum = 0;

        for (let digit = 0; digit < numToString.length; digit++) {
            sum += Number(numToString[digit]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${currnetNumber} -> True`);
        } else {
            console.log(`${currnetNumber} -> False`);
        }
    }
}
specialNumbers(20);