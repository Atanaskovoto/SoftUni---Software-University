function hotelRoom(input) {

    let month = input[0];
    let nightsCount = Number(input[1]);

    let priceApartment;
    let priceStudio;

    if (nightsCount > 14) {
        switch (month) {
            case 'May':
            case 'October': priceApartment = 65 * 0.90;
                priceStudio = 50 * 0.70;
                break;
            case 'June':
            case 'September': priceApartment = 68.70 * 0.90;
                priceStudio = 75.20 * 0.80;
                break;
            case 'July':
            case 'August': priceApartment = 77 * 0.90;
                priceStudio = 76;
                break;
        }
    } else if (nightsCount > 7) {
        switch (month) {
            case 'May':
            case 'October': priceApartment = 65;
                priceStudio = 50 * 0.95;
                break;
            case 'June':
            case 'September': priceApartment = 68.70;
                priceStudio = 75.20;
                break;
            case 'July':
            case 'August': priceApartment = 77;
                priceStudio = 76;
                break;
        }
    } else {
        switch (month) {
            case 'May':
            case 'October': priceApartment = 65;
                priceStudio = 50;
                break;
            case 'June':
            case 'September': priceApartment = 68.70;
                priceStudio = 75.20;
                break;
            case 'July':
            case 'August': priceApartment = 77;
                priceStudio = 76;
                break;
        }
    }
        
    console.log(`Apartment: ${(priceApartment * nightsCount).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceStudio * nightsCount).toFixed(2)} lv.`);
}
hotelRoom(["May", "15"])
