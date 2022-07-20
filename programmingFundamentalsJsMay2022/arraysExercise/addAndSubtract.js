function addAndSubtract(array) {
    let newArray = [],
        arraySum = 0,
        newArraySum = 0;
    for (let i = 0; i < array.length; i++) {
        arraySum += array[i];
        if (array[i] % 2 === 0) {
            newArray[i] = array[i] + i;
        } else {
            newArray[i] = array[i] - i;
        }
        newArraySum += newArray[i];
    }
    console.log(newArray);
    console.log(arraySum);
    console.log(newArraySum);
}
addAndSubtract([5, 15, 23, 56, 35])