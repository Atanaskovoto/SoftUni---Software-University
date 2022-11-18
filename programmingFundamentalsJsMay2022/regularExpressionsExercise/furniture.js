function furniture(input) {
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
    let testPattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;

    let index = 0;
    const products = [];
    let sum = 0;

    while (input[index] !== 'Purchase') {
        const productInfo = input[index].matchAll(pattern);
        const isValid = testPattern.test(input[index]);

        if (isValid) {
            for (const product of productInfo) {
                let productPrice = Number(product.groups['price'])
                let productQuantity = Number(product.groups['quantity'])
                sum += (productPrice * productQuantity);
                products.push(product.groups['name']);

            }
        }

        index++;
    }
    console.log('Bought furniture:');
    products.forEach(product => {
        console.log(product);
    });

    console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])