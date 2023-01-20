function lowestPricesInCities(input) {
    const productInfo = {};

    for (const el of input) {
        currentInfo = {};
        const [town, product, cost] = el.split(' | ');

        currentInfo[product] = {
            town,
            price: Number(cost),
        }
        if (!productInfo[product]) {
            productInfo[product] = {
                town,
                price: Number(cost),
            }
        } else if (currentInfo[product].price < productInfo[product].price) {
            productInfo[product] = {
                town,
                price: Number(cost),
            }
        }
    }

    for (const product in productInfo) {
        const [town, price] = Object.values(productInfo[product])

        console.log(`${product} -> ${price} (${town})`);

    }
}

lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']);