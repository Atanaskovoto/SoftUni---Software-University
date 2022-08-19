function numbers(array) {
    let sum = 0;
    let arrayOfNumbers = array
        .split(' ')
        .map(Number)
    arrayOfNumbers.map(x => sum += x);

    let averageNumber = sum / arrayOfNumbers.length;

    let greaterNumbers = [];

    for (let el of arrayOfNumbers) {
        if (el > averageNumber) {
            greaterNumbers.push(el);
        }
    }
    greaterNumbers.sort((a, b) => b - a);

    if (greaterNumbers.length === 0) {
        console.log('No');
    } else {
        greaterNumbers = greaterNumbers.slice(0, 5);
    }

    console.log(greaterNumbers.join(' '));
}
numbers('1');