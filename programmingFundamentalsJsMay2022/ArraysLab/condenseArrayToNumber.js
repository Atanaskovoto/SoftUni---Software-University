function condenseArrayToNumber(array) {
    let end = 1;
    while (end !== array.length) {
        let sum = [];
        for (let index = 0; index < array.length - 1; index++) {
            sum[index] = array[index] + array[index + 1];
        }
        array = sum;
    }
    console.log(array.toString());
}
condenseArrayToNumber([5, 0, 4, 1, 2]);