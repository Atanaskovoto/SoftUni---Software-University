function bonusScore(input) {

    let n = Number(input[0]);
    let bonus = 0;

    if (n <= 100) {
        bonus = 5;
    } else if (n > 1000) {
        bonus = (n * 0.10);
    } else if (n > 100) {
        bonus = (n * 0.20);
    }

    if (n % 2 === 0) {
        bonus += 1;
    } else if (n % 10 === 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(n + bonus);

}

bonusScore(["175"])

