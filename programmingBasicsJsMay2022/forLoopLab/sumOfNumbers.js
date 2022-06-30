function sumOfNumbers(input) {
    let n = String(input[0]);
    let result = 0;

    for (let i = 0; i < n.length; i++) {
        let number = Number(n[i]);
        result += number;
    }
    console.log(`The sum of the digits is:${result}`);
}
sumOfNumbers(["1234"])