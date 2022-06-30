function addBags(input) {

    let priceOfBags = Number(input[0]);
    let weightOfBags = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let numberOfBags = Number(input[3]);

    if (weightOfBags < 10) {
        priceOfBags = priceOfBags * 0.20;
    } else if (weightOfBags >= 10 && weightOfBags <= 20) {
        priceOfBags = priceOfBags / 2;
    }
    if (daysToTrip > 30) {
        priceOfBags = priceOfBags * 1.10;
    } else if (daysToTrip <= 30 && daysToTrip >= 7) {
        priceOfBags = priceOfBags * 1.15;
    } else {
        priceOfBags = priceOfBags * 1.40;
    }

    let totalPrice = priceOfBags * numberOfBags;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`)

}

addBags(["63.80",
"23",
"3",
"1"])


