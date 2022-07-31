function smallestOfThreeNumbers(numOne, numTwo, numThree) {
    // let smallestNumber = numOne;
    // if (smallestNumber > numTwo) {
    //     smallestNumber = numTwo
    // }
    // if (smallestNumber > numThree) {
    //     smallestNumber = numThree
    // }
    let smallestNumber = Math.min(numOne, numTwo, numThree)
    console.log(smallestNumber);
}
smallestOfThreeNumbers(2, 5, 3)