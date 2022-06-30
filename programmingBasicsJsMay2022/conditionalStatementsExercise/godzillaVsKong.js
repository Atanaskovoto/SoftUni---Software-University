function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let workers = Number(input[1]);
    let priceClothing = Number(input[2]);

    if (workers > 150) {
        priceClothing = priceClothing * 0.90;
    }

    let priceDecor = budget * 0.10;
    let priceWorkers = workers * priceClothing;
    let totalPrice = priceDecor + priceWorkers;

    if (totalPrice > budget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);
    }

}

godzillaVsKong(["20000", "120", "55.5"])
