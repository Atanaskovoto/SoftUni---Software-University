function skiTrip(input) {

    let days = Number(input[0]) - 1;
    let placeToStay = input[1];
    let rating = input[2];

    let totalPrice = 0;

    switch (placeToStay) {
        case 'room for one person': totalPrice = 18 * days;
            break;
        case 'apartment': totalPrice = 25 * days;
            break;
        case 'president apartment': totalPrice = 35 * days;
            break;
    }
    if (days < 10) {
        switch (placeToStay) {
            case 'apartment': totalPrice *= 0.70;
                break;
            case 'president apartment': totalPrice *= 0.90;
                break;
        }

    } else if (days >= 10 && days <= 15) {
        switch (placeToStay) {
            case 'apartment': totalPrice *= 0.65;
                break;
            case 'president apartment': totalPrice *= 0.85;
                break;
        }
    } else if (days > 15) {
        switch (placeToStay) {
            case 'apartment': totalPrice *= 0.50;
                break;
            case 'president apartment': totalPrice *= 0.80;
                break;
        }
    }
    switch (rating) {
        case 'positive': totalPrice *= 1.25;
            break;
        case 'negative': totalPrice *= 0.90;
            break;

    }
    console.log(totalPrice.toFixed(2));
}
skiTrip(["14",
    "apartment",
    "positive"])
