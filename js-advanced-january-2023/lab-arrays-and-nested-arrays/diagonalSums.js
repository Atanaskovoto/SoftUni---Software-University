function diagonalSums(input) {
    let sum = 0;
    const result = [];

    for (let i = 0; i < input.length; i++) {
        sum += input[i][i];
    }

    result.push(sum);
    sum = 0;

    input.reverse()

    for (let i = 0; i < input.length; i++) {
        sum += input[i][i];
    }

    result.push(sum);

    console.log(result.join(' '));
}

diagonalSums([[20, 40],
[10, 60]]);

diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);