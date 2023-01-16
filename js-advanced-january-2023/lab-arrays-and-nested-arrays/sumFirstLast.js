function sumFirstLast(input) {

    input = input.map(Number);

    console.log(input.shift() + input.pop());
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);