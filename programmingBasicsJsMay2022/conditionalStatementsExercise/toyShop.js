function toyShop(input) {

    let priceTrip = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalToys = puzzles + dolls +
        bears + minions + trucks;
    let priceToys = puzzles * 2.60 + dolls * 3 +
        bears * 4.10 + minions * 8.20 + trucks * 2;

    if (totalToys >= 50) {
        priceToys = priceToys * 0.75;
    }

    let totalPrice = priceToys * 0.90;

    if (totalPrice >= priceTrip) {
        console.log(`Yes! ${(totalPrice - priceTrip).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceTrip - totalPrice).toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"])
