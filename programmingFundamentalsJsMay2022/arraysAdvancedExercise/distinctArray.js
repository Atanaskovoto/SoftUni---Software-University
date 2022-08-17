function distinctArray(input) {
    let resultArray = [];
    for (let i = 0; i < input.length; i++) {
        if (!resultArray.includes(input[i])) {
            resultArray.push(input[i]);
        }
    }
console.log(resultArray.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])