function maxNumber(array) {
    let result = [],
        arrayL = array.length,
        arrayMaxNumber = array[arrayL - 1];
    result.push(arrayMaxNumber);
    for (let i = arrayL - 2; i >= 0; i--) {
        if (array[i] > arrayMaxNumber) {
            arrayMaxNumber = array[i];
            result.push(array[i])
        }
    }
    result.reverse();
    console.log(result.join(' '));
}
maxNumber([41, 41, 34, 20]);