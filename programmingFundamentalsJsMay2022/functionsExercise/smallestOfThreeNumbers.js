function smallestOfThreeNumbers(numOne, numTwo, numThree) {
    //Another solution:

    //  let smallestNumber = numOne;
    // if (smallestNumber > numTwo) {
    //     smallestNumber = numTwo
    // }
    // if (smallestNumber > numThree) {
    //     smallestNumber = numThree
    // }
    // console.log(smallestNumber);
    
    // Another solution:

    // let smallestNumber = Math.min(numOne, numTwo, numThree)
    // console.log(smallestNumber);

    let smallest = Number.MAX_SAFE_INTEGER;

    let array = [];
    array.push(numberOne, numberTwo, numberThree);

    for (let i = 0; i < 3; i++) {
        if (smallest > array[i]) {
            smallest = array[i];
        }
    }

    console.log(smallest);
}
smallestOfThreeNumbers(2, 5, 3)