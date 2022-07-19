function arrayRotation(array, rotations) {
    let result = [];
    for (let el of array) {
        result.push(el);
    }

    for (let index = 0; index < rotations; index++) {
        let tempArray = []
        for (let i = 0; i < result.length - 1; i++) {
            tempArray[i] = result[i + 1];
            tempArray[result.length - 1] = result[0];
        }
        result = tempArray;
    }
    console.log(result.join(' '));
}
arrayRotation([2, 4, 15, 31], 0);