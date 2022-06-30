function fishingBoat(input) {

    let budget = Number(input[0]);
    let seasson = input[1];
    let fishermans = Number(input[2]);
    let price = 0;

    if (fishermans <= 6) {
        switch (seasson) {
            case 'Spring': price = 3000 * 0.90;
                break;
            case 'Summer':
            case 'Autumn': price = 4200 * 0.90;
                break;
            case 'Winter': price = 2600 * 0.90;
                break;
        }
    } else if (fishermans > 6 && fishermans <= 11) {
        switch (seasson) {
            case 'Spring': price = 3000 * 0.85;
                break;
            case 'Summer':
            case 'Autumn': price = 4200 * 0.85;
                break;
            case 'Winter': price = 2600 * 0.85;
                break;
        }
    } else if (fishermans > 11) {
        switch (seasson) {
            case 'Spring': price = 3000 * 0.75;
                break;
            case 'Summer':
            case 'Autumn': price = 4200 * 0.75;
                break;
            case 'Winter': price = 2600 * 0.75;
                break;
        }
    }
    if (fishermans % 2 === 0 && seasson != 'Autumn') {
        price *= 0.95;
    }
    if (price <= budget) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["3600", "Autumn", "6"])

