function familyTrip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let priceForOneNight = Number(input[2]);
    let additionalCosts = Number(input[3]);
    let totalPrice = 0;

    if (nights > 7) {
        totalPrice = nights * (priceForOneNight - priceForOneNight * 0.05) +
            budget * (additionalCosts / 100);
    } else {
        totalPrice = nights * priceForOneNight +
            budget * (additionalCosts / 100);
    }

    if (totalPrice <= budget) {
        let moneyLeft = budget - totalPrice;
        console.log('Ivanovi will be left with ' + moneyLeft.toFixed(2) + ' leva after vacation.');
    } else {
        let moneyLeft = totalPrice - budget;
        console.log(moneyLeft.toFixed(2) + ' leva needed.');
    }
}
familyTrip(['500', '7', '66', '15'])