function printNthElement(input) {
    let rezult = [];
    let theStep = Number(input[input.length - 1]);

    for (let i = 0; i < input.length - 1; i += theStep) {
        rezult.push(input[i]);
    }

    console.log(rezult.join(' '));
}
printNthElement(['5', '20', '31', '4', '20', '2']);