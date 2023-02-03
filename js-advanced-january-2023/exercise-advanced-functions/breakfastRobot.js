function breakfastRobot() {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    }

    const commands = {
        restock,
        prepare,
        report,
    }

    function manage(string) {
        const [command, item, quantity] = string.split(' ');
        return commands[command](item, quantity);
    }

    return manage;

    function restock(item, quantity) {
        storage[item] += Number(quantity);
        return 'Success';
    }

    function prepare(recipe, quantity) {
        quantity = Number(quantity);
        const order = Object.entries(recipes[recipe]);

        order.forEach(el => { el[1] *= quantity });

        for (const [ingredient, reqQuantity] of order) {
            if (storage[ingredient] < reqQuantity) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        order.forEach(([ingredient, reqQuantity]) => storage[ingredient] -= reqQuantity);
        return 'Success';
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }
}

let manager = breakfastRobot();

console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));