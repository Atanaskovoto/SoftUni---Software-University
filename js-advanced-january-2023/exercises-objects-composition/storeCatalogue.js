function storeCatalogue(input) {
    input.sort((a, b) => a.localeCompare(b));
    const productinfo = {};

    for (const el of input) {
        const [name, cost] = el.split(' : ');
        if (!productinfo[name[0]]) {
            productinfo[name[0]] = [];
        }
        currentInfo = {
            product: name,
            price: Number(cost),
        };
        productinfo[name[0]].push(currentInfo);
    }

    for (const key in productinfo) {
        console.log(key);
        productinfo[key].forEach(element => {
            const [product, price] = Object.values(element);
            console.log(`  ${product}: ${price}`);
        });
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);