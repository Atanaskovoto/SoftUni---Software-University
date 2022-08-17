function processOddNumbers(input) {
    // Solution 1:

    // let rezult = [];
    // let inputLength = input.length;
    // for (let index = inputLength - 1; index >= 0; index--) {
    //     if (index % 2 !== 0) {
    //         rezult.push(input[index] * 2);
    //     }
    // }
    // console.log(rezult.join(' '));

    // Solution 2:

    let filterEl = input.filter((x, i) => i % 2 !== 0);
    let doubledEl = filterEl.map(x => x * 2);
    let reverseEl = doubledEl.reverse();
    console.log(reverseEl.join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);