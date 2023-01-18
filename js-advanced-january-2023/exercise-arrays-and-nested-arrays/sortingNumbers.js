function sortingNumbers(input) {
    input.sort((a, b) => a - b);
    const result = [];
    const inputLength = input.length / 2;

    for (let i = 0; i < inputLength; i++) {
        result.push(input.shift(), input.pop());
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);