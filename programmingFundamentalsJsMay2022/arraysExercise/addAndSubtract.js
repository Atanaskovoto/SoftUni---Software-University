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

    // Another solution:

    // let rezult = [];
    //     let sumOfInput = 0;
    //     let sumOfRezult = 0;
    
    //     for (let i = 0; i < input.length; i++) {
    //         let currentNumber = input[i];
    //         sumOfInput += input[i];
    
    //         if (currentNumber % 2 == 0) {
    //             currentNumber += i;
    //             rezult.push(currentNumber);
    //         } else {
    //             currentNumber -= i;
    //             rezult.push(currentNumber);
    //         }
    //         sumOfRezult += currentNumber;
    //     }
    //     console.log(rezult);
    //     console.log(sumOfInput);
    //     console.log(sumOfRezult);
}
addAndSubtract([5, 15, 23, 56, 35])