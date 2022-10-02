function maxNumber(array) {
    let result = [],
        arrayL = array.length,
        arrayMaxNumber = array[arrayL - 1];
    result.push(arrayMaxNumber);
    for (let i = arrayL - 2; i >= 0; i--) {
        if (array[i] > arrayMaxNumber) {
            arrayMaxNumber = array[i];
            result.push(array[i])
        }
    }
    result.reverse();
    console.log(result.join(' '));

    // Another solution:

    // let rezult = [];
    // let maxNumber = array[array.length - 1];
    // rezult.unshift(maxNumber);

    // for (let i = array.length - 2; i >= 0; i--) {
    //      if (maxNumber < array[i]) {
    //         maxNumber = array[i];
    //         rezult.unshift(maxNumber);
    //      }
    // }
    // console.log(rezult.join(' '));
}
maxNumber([1, 4, 3, 0]);