function safari(input) {

    let budget = Number(input[0]);
    let litersOfFuel = Number(input[1]);
    let dayOfWeek = input[2];

    let priceFuel = litersOfFuel * 2.10;
    let priceForGuide = 100;

    let totalPrice = priceFuel + priceForGuide;

    switch (dayOfWeek) {
        case 'Saturday': totalPrice *= 0.90;
            break;
        case 'Sunday': totalPrice *= 0.80;
            break;
    }
    if (budget >= totalPrice) {
        console.log(`Safari time! Money left: ${(budget - totalPrice).toFixed(2)} lv.`);
    } else if (totalPrice > budget) {
        console.log(`Not enough money! Money needed: ${(totalPrice - budget).toFixed(2)} lv.`);
    }

}
safari(["120", "30", "Saturday"])