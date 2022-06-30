function sumNumbers(input) {

    let index = 0;
    let total = Number(input[index]);
    index++;
    let number = Number(input[index]);
    let sum = 0;

    while (sum < total) {

        sum += number;
        index++
        number = Number(input[index]);

    }

    console.log(sum);

}

sumNumbers(["100", "10", "20", "30", "40", "20"])
