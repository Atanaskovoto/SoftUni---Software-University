function extractIncreasingSubsetFromArray(input) {
    // const result = [];
    // let maxNumber = 0;

    // for (const el of input) {
    //     if (el >= maxNumber) {
    //         result.push(el);
    //         maxNumber = el;
    //     }
    // }

    // return result;

    // Another solution:

    let maxNumber = 0;
    return input.reduce((acc, el) => {
        if (el >= maxNumber) {
            acc.push(el);
            maxNumber = el;
        }
        return acc;
    }, []);
}

// extractIncreasingSubsetFromArray([1, 2, 3, 4]);
console.log(extractIncreasingSubsetFromArray([20, 3, 2, 15, 6, 1]));