function fruitMarket(a, b, c, d, e) {

    let priceStrawberry = Number(a);
    let bananas = Number(b);
    let oranges = Number(c);
    let raspberrys = Number(d);
    let strawberrys = Number(e);

    let priceRaspberrys = priceStrawberry / 2;
    let priceBananas = priceRaspberrys * 0.20;
    let priceOranges = priceRaspberrys * 0.60;

    let totalPrice = priceStrawberry * strawberrys + priceBananas * bananas +
        priceOranges * oranges + priceRaspberrys * raspberrys;

    console.log(totalPrice.toFixed(2));
}
fruitMarket('48', '10', '3.3', '6.5', '1.7')