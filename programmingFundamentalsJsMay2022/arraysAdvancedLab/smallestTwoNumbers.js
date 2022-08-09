function smallestTwoNumbers(array) {
    let copyOfArray = array.slice();
    let smallestNumbers = [];
    let index;
    for (let i = 0; i < 2; i++) {
        index = copyOfArray.indexOf(Math.min(...copyOfArray));
        smallestNumbers.push(Math.min(...copyOfArray));
        copyOfArray.splice(index, 1);
    }
    console.log(smallestNumbers.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);