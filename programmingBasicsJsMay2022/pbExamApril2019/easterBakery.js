function easterBakery(input) {

    let priceFlourKg = Number(input[0]);
    let kgFlour = Number(input[1]);
    let kgSugar = Number(input[2]);
    let eggs = Number(input[3]);
    let yeast = Number(input[4]);

    let priceSugar = priceFlourKg * 0.75;
    let priceEggs = priceFlourKg * 1.10;
    let priceYeast = priceSugar * 0.20;

    let totalPriceFlour = priceFlourKg * kgFlour;
    let totalPriceSugar = priceSugar * kgSugar;
    let totalPriceEggs = priceEggs * eggs;
    let totalPriceYeast = priceYeast * yeast;

    let totalPrice = totalPriceEggs + totalPriceFlour +
    totalPriceSugar + totalPriceYeast;

    console.log(totalPrice.toFixed(2));

}

easterBakery(["50",
"10",
"3.5",
"6",
"1"])
