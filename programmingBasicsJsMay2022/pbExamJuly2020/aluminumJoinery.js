function aluminumJoinery(input) {

    let numberOfJoinery = Number(input[0]);
    let typeOfJoinery = input[1];
    let deliveryType = input[2];

    let priceOfJoinery = 0;
    let totalPrice = 0;



    switch (typeOfJoinery) {

        case '90X130':
            if (numberOfJoinery > 10 && numberOfJoinery <= 30) {
                priceOfJoinery = 110;
            } else if (numberOfJoinery > 30 && numberOfJoinery <= 60) {
                priceOfJoinery = 110 * 0.95;
            } else if (numberOfJoinery > 60) {
                priceOfJoinery = 110 * 0.92;
            }
            break;
        case '100X150':
            if (numberOfJoinery > 10 && numberOfJoinery <= 40) {
                priceOfJoinery = 140;
            } else if (numberOfJoinery > 40 && numberOfJoinery <= 80) {
                priceOfJoinery = 140 * 0.94;
            } else if (numberOfJoinery > 80) {
                priceOfJoinery = 140 * 0.90;
            }
            break;
        case '130X180':
            if (numberOfJoinery > 10 && numberOfJoinery <= 20) {
                priceOfJoinery = 190;
            } else if (numberOfJoinery > 20 && numberOfJoinery <= 50) {
                priceOfJoinery = 190 * 0.93;
            } else if (numberOfJoinery > 50) {
                priceOfJoinery = 190 * 0.88;
            }
            break;
        case '200X300':
            if (numberOfJoinery > 10 && numberOfJoinery <= 25) {
                priceOfJoinery = 250;
            } else if (numberOfJoinery > 25 && numberOfJoinery <= 50) {
                priceOfJoinery = 250 * 0.91;
            } else if (numberOfJoinery > 50) {
                priceOfJoinery = 250 * 0.86;
            }
            break;

    }

    switch (deliveryType) {

        case 'With delivery':
            totalPrice = numberOfJoinery * priceOfJoinery + 60;
            break;
        case 'Without delivery':
            totalPrice = numberOfJoinery * priceOfJoinery;
            break;

    }

    if (numberOfJoinery > 99) {
        totalPrice = totalPrice * 0.96;
    }

    if (numberOfJoinery <= 10) {
        console.log('Invalid order');
    } else {
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }

}

aluminumJoinery(["2", "130X180", "With delivery"]);
