function magicSum(array, sum) {
    let arrayL = array.length;
    for (let i = 0; i < arrayL - 1; i++) {
        for (let n = i + 1; n < arrayL; n++) {
            let result = [];
            let currentSum = array[i] + array[n];
            if (currentSum === sum) {
                result.push(array[i], array[n]);
                console.log(result.join(' '));
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);