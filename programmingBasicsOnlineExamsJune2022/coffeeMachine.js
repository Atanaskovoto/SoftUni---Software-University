function coffeeMachine(input) {
    let drink = input[0];
    let sugarLevel = input[1];
    let quantity = Number(input[2]);
    let price = 0;

    switch (drink) {
        case 'Espresso':
            switch (sugarLevel) {
                case 'Without': price = (quantity * 0.90) * 0.65; break;
                case 'Normal': price = quantity * 1; break;
                case 'Extra': price = quantity * 1.20; break;

            } if (quantity >= 5) {
                price = price * 0.75;
            }; break;

        case 'Cappuccino':
            switch (sugarLevel) {
                case 'Without': price = (quantity * 1) * 0.65; break;
                case 'Normal': price = quantity * 1.20; break;
                case 'Extra': price = quantity * 1.60; break;
            }; break;

        case 'Tea':
            switch (sugarLevel) {
                case 'Without': price = (quantity * 0.50) * 0.65; break;
                case 'Normal': price = quantity * 0.60; break;
                case 'Extra': price = quantity * 0.70; break;
            }; break;
    } if (price > 15) {
        price = price * 0.80
    }
    console.log(`You bought ${quantity} cups of ${drink} for ${price.toFixed(2)} lv.`)
}
coffeeMachine(["Tea",
"Extra",
"3"])


