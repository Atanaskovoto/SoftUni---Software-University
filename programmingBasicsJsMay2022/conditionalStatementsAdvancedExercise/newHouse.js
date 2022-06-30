function newHouse(input) {

    let flowers = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch (flowers) {
        case 'Roses': if (flowersCount > 80) {
            price = flowersCount * 5 * 0.90;
        } else {
            price = flowersCount * 5;
        } break;
        case 'Dahlias': if (flowersCount > 90) {
            price = flowersCount * 3.80 * 0.85;
        } else {
            price = flowersCount * 3.80;
        } break;
        case 'Tulips': if (flowersCount > 80) {
            price = flowersCount * 2.80 * 0.85;
        } else {
            price = flowersCount * 2.80;
        } break;
        case 'Narcissus': if (flowersCount < 120) {
            price = flowersCount * 3 * 1.15;
        } else {
            price = flowersCount * 3;
        } break;
        case 'Gladiolus': if (flowersCount < 80) {
            price = flowersCount * 2.50 * 1.20;
        } else {
            price = flowersCount * 2.50;
        } break;
    }
    if (price <= budget) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}
newHouse(["Tulips",
    "88",
    "260"])

