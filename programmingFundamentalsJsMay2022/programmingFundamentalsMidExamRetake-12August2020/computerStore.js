function computerStore(array) {
    let typeOfCustomer = array.pop();
    let prices = array.map(Number);

    let sum = 0;
    let sumWithTaxes = 0;
    for (let el of prices) {
        if (el < 0) {
            console.log('Invalid price!');
        } else {
            sum += el;
            sumWithTaxes += el * 1.2;
        }
    }

    let totalTaxes = sumWithTaxes - sum;

    switch (typeOfCustomer) {
        case 'special': sumWithTaxes = sumWithTaxes * 0.90; break;
    }
    if (sum === 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${sum.toFixed(2)}$
Taxes: ${totalTaxes.toFixed(2)}$
-----------
Total price: ${sumWithTaxes.toFixed(2)}$`);
    }
}
computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);