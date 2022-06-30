function tennisEquipment(input) {

    let priceTennis = Number(input[0]);
    let numberTennis = Number(input[1]);
    let tennisShoes = Number(input[2]);

    let priceTennisShoes = priceTennis / 6;
    let price = priceTennis * numberTennis + tennisShoes * priceTennisShoes;
    let equipment = price * 0.20;
    let totalPrice = price + equipment;

    console.log(`Price to be paid by Djokovic ${Math.floor(totalPrice / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(totalPrice / 8 * 7)}`);

}
tennisEquipment(['850', '4', '2'])