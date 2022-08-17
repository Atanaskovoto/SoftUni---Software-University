function smallestTwoNumbers(array) {
    let copyOfArray = array.slice();

    // Solution 1:

    // let smallestNumbers = [];
    // let index;
    // for (let i = 0; i < 2; i++) {
    //     index = copyOfArray.indexOf(Math.min(...copyOfArray));
    //     smallestNumbers.push(Math.min(...copyOfArray));
    //     copyOfArray.splice(index, 1);
    // }
    // console.log(smallestNumbers.join(' '));

    // Solution 2:

    copyOfArray.sort((a, b) => a - b);
    let rezult = copyOfArray.slice(0, 2);
    console.log(rezult.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);