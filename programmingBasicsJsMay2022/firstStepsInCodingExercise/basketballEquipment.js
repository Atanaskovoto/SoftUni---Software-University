function basketballEquipment(input) {
    let annualBasketballFee = Number(input[0]);

    let basketballShoes = annualBasketballFee * 0.60;
    let basketballClothes = basketballShoes * 0.80;
    let basketball = basketballClothes / 4;
    let basketballAccessories = basketball / 5;

    let totalMoney = basketballShoes + basketballClothes +
        basketball + basketballAccessories + annualBasketballFee;

    console.log(totalMoney);
}
basketballEquipment(['365'])