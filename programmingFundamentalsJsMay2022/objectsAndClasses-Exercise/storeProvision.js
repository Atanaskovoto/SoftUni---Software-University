function storeProvision(inStock, ordered) {
    class Product {
        constructor(name, quantity) {
            this.name = name;
            this.quantity = quantity;
        }
        print() {
            console.log(`${this.name} -> ${this.quantity}`);
        }
    }
    let allProduct = inStock.slice();
    for (let o = 0; o < ordered.length; o += 2) {
        let orderedProduct = ordered[o];
        let orderedProductQunatity = Number(ordered[o + 1]);

        if (!inStock.includes(orderedProduct)) {
            allProduct.push(orderedProduct);
            allProduct.push(orderedProductQunatity);
        } else {
            let index = allProduct.indexOf(orderedProduct);
            let newQuantity = Number(allProduct[index + 1]) + orderedProductQunatity
            allProduct.splice(index + 1, 1, newQuantity);
        }
    }
    for (let i = 0; i < allProduct.length; i += 2) {
        let name = allProduct[i];
        let quantity = allProduct[i + 1];

        new Product(name, quantity).print();
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'

],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'

    ])