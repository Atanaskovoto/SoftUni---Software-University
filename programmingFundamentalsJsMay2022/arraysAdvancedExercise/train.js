function train(array) {
    let commands = array.slice();
    let arrayOfwagons = commands
        .shift()
        .split(' ')
        .map(Number);
    let wagonMaxCapacity = commands.shift();
    for (let i = 0; i < commands.length; i++) {
        let currentArray = commands[i].split(' ');

        if (currentArray[0] === 'Add') {
            arrayOfwagons.push(Number(currentArray[1]));
        } else {
            currentArray = currentArray.map(Number);
            for (let r = 0; r < arrayOfwagons.length; r++) {
                if (currentArray[0] + arrayOfwagons[r] <= wagonMaxCapacity) {
                    arrayOfwagons[r] += currentArray[0];
                    break;
                }
            }
        }
    }
    console.log(arrayOfwagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])