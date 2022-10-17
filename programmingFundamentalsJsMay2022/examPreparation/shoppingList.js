function shoppingList(input) {
    let listOfGroceries = input
        .shift()
        .split('!');

    let index = 0;
    let commands = input[index++];

    while (commands !== 'Go Shopping!') {

        let [command, item, newItem] = commands.split(' ');

        switch (command) {
            case 'Urgent': if (!listOfGroceries.includes(item)) {
                listOfGroceries.unshift(item);
            }
                break;
            case 'Unnecessary': if (listOfGroceries.includes(item)) {
                let index = listOfGroceries.indexOf(item);
                listOfGroceries.splice(index, 1);
            }
                break;
            case 'Correct': if (listOfGroceries.includes(item)) {
                let index = listOfGroceries.indexOf(item);
                listOfGroceries.splice(index, 1, newItem);
            }
                break;
            case 'Rearrange': if (listOfGroceries.includes(item)) {
                let index = listOfGroceries.indexOf(item);
                listOfGroceries.push(listOfGroceries.splice(index, 1,));
            }
                break;
        }
        commands = input[index++];
    }

    console.log(listOfGroceries.join(', '));

}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])