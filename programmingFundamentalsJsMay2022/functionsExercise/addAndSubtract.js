function addAndSubtract(numOne, numTwo, numThree) {
    function sum(numOne, numTwo) {
        return numOne + numTwo;
    }
    function subtrack(numThree) {
        return sum(numOne, numTwo) - numThree
    }
    console.log(subtrack(numThree));
}
addAndSubtract(23, 6, 10)