function shopping(input) {

    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ramMemory = Number(input[3]);

    let priceVideocards = videoCards * 250;
    let priceProcessors = processors * (priceVideocards * 0.35);
    let priceRamMemory = ramMemory * (priceVideocards * 0.10);

    let totalPrice = priceVideocards + priceProcessors + priceRamMemory;

    if (videoCards > processors) {
        totalPrice = totalPrice * 0.85;
    }
    if (totalPrice <= budget) {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
    
}

shopping(["900", "2", "1", "3"])
