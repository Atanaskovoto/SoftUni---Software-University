function cinema(input) {

    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let price = 0;

    switch (type) {
        case 'Premiere': price = 12;
        break;
        case 'Normal': price = 7.50;
        break;
        case 'Discount': price = 5;
        break;
    }

    let totalPrice = rows * columns * price;
    console.log(`${totalPrice.toFixed(2)} leva`);
}
cinema(["Premiere",
"10",
"12"])
