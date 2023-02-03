function fibonacci() {
    let num1 = 0;
    let num2 = 1;
    let result = 0;
    function getFibonacci() {
        result = num1 + num2;
        num1 = num2;
        num2 = result;
        return num1;
    }

    return getFibonacci;
}

const test = fibonacci();

console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());

