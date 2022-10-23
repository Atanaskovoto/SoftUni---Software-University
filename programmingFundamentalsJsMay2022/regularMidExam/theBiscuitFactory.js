function biscuitFactory(input) {
    let biscuitPerDay = Number(input.shift());
    let workersCount = Number(input.shift());
    let rivalFactoryProduction = Number(input.shift());

    let biscuitForDay = biscuitPerDay * workersCount;
    let totalBiscuit = 0;
    let days = 0;

    for (let i = 0; i < 30; i++) {
        days++;

        if (days % 3 === 0) {
            totalBiscuit += Math.floor(biscuitForDay * 0.75);
        } else {
            totalBiscuit += biscuitForDay;
        }
    }

    console.log(`You have produced ${totalBiscuit} biscuits for the past month.`);

    let precentage = Math.abs(totalBiscuit / rivalFactoryProduction * 100 - 100);

    totalBiscuit > rivalFactoryProduction ? console.log(`You produce ${precentage.toFixed(2)} percent more biscuits.`)
        : console.log(`You produce ${precentage.toFixed(2)} percent less biscuits.`);

}

biscuitFactory(['78', '8', '16000']);