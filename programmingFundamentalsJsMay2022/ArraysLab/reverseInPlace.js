function reverseInPlace(array) {
    // first solution:
    // let printLine = '';
    // for (let i = array.length - 1; i >= 0; i--) {
    //     printLine += `${array[i]} `;
    // }
    // console.log(printLine);

    // second solution:
    // array.reverse();
    // console.log(array.join(' '));

    // third solution:
    for (let i = 0; i < array.length / 2; i++) {
        let buff = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = buff;
    }
    console.log(array.join(' '));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);