function negativeOrPositiveNumbers(array) {
    let result = [];
    for (let el of array) {
        let currentNumber = Number(el);
        if (currentNumber < 0) {
            result.unshift(currentNumber);
        } else {
            result.push(currentNumber);
        }
    }
    console.log(result.join('\n'));
}
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);