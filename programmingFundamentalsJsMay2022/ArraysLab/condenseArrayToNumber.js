function condenseArrayToNumber(array) {
        while (array.length > 1) {
        let sum = [];
        for (let index = 0; index < array.length - 1; index++) {
            sum[index] = array[index] + array[index + 1];
        }
        array = sum;
    }
    console.log(array.toString());
}
condenseArrayToNumber([5, 0, 4, 1, 2]);