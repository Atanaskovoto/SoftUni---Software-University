function calorieObject(input) {
    const result = {};

    for (let index = 0; index < input.length; index += 2) {
        result[input[index]] = Number(input[index + 1]);
    }

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);