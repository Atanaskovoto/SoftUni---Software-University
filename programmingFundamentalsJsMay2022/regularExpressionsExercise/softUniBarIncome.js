function softUniBarIncome(input) {
    const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*\b(?<price>\d+\.?\d+)\$/;
   
    let allMoney = 0;

    let index = 0;
    while (input[index] !== 'end of shift') {

        const currentInfo = pattern.exec(input[index]);


        if (pattern.test(input[index])) {

            const name = currentInfo.groups['customer'];
            const product = currentInfo.groups['product'];
            const count = Number(currentInfo.groups['count']);
            const price = Number(currentInfo.groups['price'])
            const finalPrice = count * price;

            console.log(`${name}: ${product} - ${finalPrice.toFixed(2)}`);

            allMoney += finalPrice;

        }

        index++;
    }

    console.log(`Total income: ${allMoney.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',

    '%Peter%<Gum>|1|1.3$',

    '%Maria%<Cola>|1|2.4$',

    'end of shift']);