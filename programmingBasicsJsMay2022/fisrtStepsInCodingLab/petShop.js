function petShop(input) {
    let countDogsFood = Number(input[0]);
    let countCatsFood = Number(input[1]);
    let totalMoney = countCatsFood * 4 + countDogsFood * 2.50;
    console.log(`${totalMoney} lv.`)
}
petShop(['5', '4'])