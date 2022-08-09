function sumFirstAndLast(input) {
    let sum = Number(input.shift()) + Number(input[input.length - 1]);
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40']);