function blackFlag(input) {
    input = input.map(Number);

    let days = input.shift();
    let dailyPlunder = input.shift();
    let expectedPlunder = input.shift();
    let dayCount = 0;
    let totalPlunder = 0;

    for (let i = 0; i < days; i++) {
        dayCount++;

        if (dayCount % 3 === 0) {
            totalPlunder += dailyPlunder * 0.50;
        }
        totalPlunder += dailyPlunder;
        if (dayCount % 5 === 0) {
            totalPlunder = totalPlunder * 0.70;
        }
    }

    let percentageOFPlunder = totalPlunder / expectedPlunder * 100;

    totalPlunder >= expectedPlunder ? console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
        : console.log(`Collected only ${percentageOFPlunder.toFixed(2)}% of the plunder.`);
}

blackFlag(["5", "40", "100"]);