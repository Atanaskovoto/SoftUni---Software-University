function touristShop(input) {
    let budget = Number(input[0]);
    let totalPrice = 0;
    let equipmentCount = 0;

    for (let i = 1; i < input.length; i++) {
        let equipment = input[i];
        if (equipment === 'Stop') {
            console.log(`You bought ${equipmentCount} products for ${totalPrice.toFixed(2)} leva.`);
            break;
        }
        equipmentCount++
        i++;
        let price = Number(input[i]);
        if (equipmentCount % 3 === 0) {
            price /= 2;
        }
        totalPrice += price;

        if (totalPrice > budget) {
            console.log(`You don't have enough money!`);
            console.log(`You need ${(totalPrice - budget).toFixed(2)} leva!`);
            break;
        }
    }
}
touristShop(["54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"])



