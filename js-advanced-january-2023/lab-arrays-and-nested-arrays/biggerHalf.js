function biggerHalf(input) {
    input.sort((a, b) => a - b);
    const startIndex = Math.floor(input.length / 2);
    const result = input.slice(startIndex);
    return result;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);