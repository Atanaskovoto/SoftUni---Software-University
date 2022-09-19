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

    // Another solution:

    // for (let i = 1; i <=end; i++) { 
    //     sum = '';
    //     for (let r = 1; r <= i; r++) {
    //        sum += ` ${i}`;
    //     }
    //     console.log(sum);
    // }
}
triangleOfNumbers(3)