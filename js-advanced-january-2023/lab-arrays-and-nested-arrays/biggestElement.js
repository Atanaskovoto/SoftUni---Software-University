function biggestElement(input) {
    const result = [];

    for (const el of input) {
        const currentMaxNumber = Math.max(...el);
        result.push(currentMaxNumber);
    }

    const maxNumber = Math.max(...result);

    return maxNumber;
}

console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]));

biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);