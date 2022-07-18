function addAndSubtract(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray[i] = array[i] + i;
        } else {
            newArray[i] = array[i] - i;
        }
    }
    console.log(newArray);
    let arraySum = 0,
        newArraySum = 0;
    for (let el of array) {
        arraySum += el;
    }
    console.log(arraySum);
    for (let el of newArray) {
        newArraySum += el;
    }
    console.log(newArraySum);
}
addAndSubtract([5, 15, 23, 56, 35])