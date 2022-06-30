function worldSnookerChampionship(input) {

    let stage = input[0];
    let type = input[1];
    let tickets = Number(input[2]);
    let picture = input[3];

    let priceTickets = 0;
    let pricePicture = tickets * 40;

    switch (stage) {
        case 'Quarter final': switch (type) {
            case 'Standard': priceTickets = 55.50; break;
            case 'Premium': priceTickets = 105.20; break;
            case 'VIP': priceTickets = 118.90; break;
        } break;
        case 'Semi final': switch (type) {
            case 'Standard': priceTickets = 75.88; break;
            case 'Premium': priceTickets = 125.22; break;
            case 'VIP': priceTickets = 300.40; break;
        } break;
        case 'Final': switch (type) {
            case 'Standard': priceTickets = 110.10; break;
            case 'Premium': priceTickets = 160.66; break;
            case 'VIP': priceTickets = 400; break;
        } break;
    }

    let totalPrice = tickets * priceTickets;
    
    
    if (totalPrice > 4000) {
        totalPrice *= 0.75;
    } else if (totalPrice > 2500) {
        if (picture === 'Y') {
            totalPrice *= 0.90;
            totalPrice += pricePicture;
        } else {
            totalPrice *= 0.90;
        }
    } else {
        if (picture === 'Y') {
            totalPrice += pricePicture;
        }
    }
    
    console.log(totalPrice.toFixed(2));
}
worldSnookerChampionship(["Quarter final", "Standard", "11", "N"])

