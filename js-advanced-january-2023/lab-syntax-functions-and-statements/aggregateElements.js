function aggregateElements(input) {

    let sum = 0;
    let sumOfInverseValues = 0
    let concat = '';

    input.map(x => sum += x);
    input.map(x => sumOfInverseValues += 1 / x);
    input.map(x => concat += x);

    console.log(sum);
    console.log(sumOfInverseValues);
    console.log(concat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);