function storage(input) {
    const listOfItems = {};

    for (const line of input) {
        let [item, quantity] = line.split(' ');

        if (!listOfItems[item]) {
            listOfItems[item] = Number(quantity);
        } else {
            listOfItems[item] += Number(quantity);
        }
    }

    for (const key in listOfItems) {
        console.log(`${key} -> ${listOfItems[key]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])