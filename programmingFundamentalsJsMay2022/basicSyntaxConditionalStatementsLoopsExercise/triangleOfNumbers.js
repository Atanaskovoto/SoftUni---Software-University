function triangleOfNumbers(n) {
    let start = 1;

    while (start <= n) {
        let sum = '';
        for (let i = 1; i <= start; i++) {
            sum += `${start} `;
        }
        start++;
        console.log(sum);
    }
}
triangleOfNumbers(3)