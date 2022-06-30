function vacation(peopleCount, typeOfGroup, dayOfWeek) {
    let price;
    let discount = 1;

    switch (typeOfGroup) {
        case 'Students': switch (dayOfWeek) {
            case 'Friday': price = 8.45; break;
            case 'Saturday': price = 9.80; break;
            case 'Sunday': price = 10.46; break;
        }
            if (peopleCount >= 30) {
                discount = 0.85;
            } break;
        case 'Business': switch (dayOfWeek) {
            case 'Friday': price = 10.90; break;
            case 'Saturday': price = 15.60; break;
            case 'Sunday': price = 16; break;
        }
            if (peopleCount >= 100) {
                peopleCount -= 10;
            } break;
        case 'Regular': switch (dayOfWeek) {
            case 'Friday': price = 15; break;
            case 'Saturday': price = 20; break;
            case 'Sunday': price = 22.50; break;
        }
            if (peopleCount >= 10 && peopleCount <= 20) {
                discount = 0.95;
            } break;
    }

    let totalPrice = peopleCount * price * discount;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
    
}
vacation(40, "Regular", "Saturday")