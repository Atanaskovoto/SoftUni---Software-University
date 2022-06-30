function foodDelivery(input) {
    let countChikenMenus = Number(input[0]);
    let countFishMenus = Number(input[1]);
    let countVegetarianMenus = Number(input[2]);

    let priceForFood = countChikenMenus * 10.35 +
        countFishMenus * 12.40 + countVegetarianMenus * 8.15;
    let priceForDessert = priceForFood * 0.20;
    let totalPrice = priceForFood + priceForDessert + 2.50;

    console.log(totalPrice);
}
foodDelivery(['2', '4', '3'])