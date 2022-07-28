function signCheck(numOne, numTwo, numThree) {
    let array = [];
    array.push(numOne, numTwo, numThree);
    let isNegative = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            isNegative++
        }
    }
    let result;
    if (isNegative === 2 || isNegative === 0) {
        result = 'Positive';
    } else {
        result = 'Negative'
    }
    console.log(result);
}
signCheck(5, 12, 15)