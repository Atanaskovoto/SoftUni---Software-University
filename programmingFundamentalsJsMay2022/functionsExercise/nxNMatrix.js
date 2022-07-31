function nxNMatrix(number) {
    for (let r = 0; r < number; r++) {
        let arrayOfNumbers = [];
        for (let i = 0; i < number; i++) {
            arrayOfNumbers.push(number);
        }
        console.log(arrayOfNumbers.join(' '));
    }
}
nxNMatrix(7);