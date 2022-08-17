function arrayManipulations(array) {
    let commands = array.slice();
    let arrayToNumber = commands
        .shift()
        .split(' ')
        .map(Number);


    for (let i = 0; i < commands.length; i++) {
        let [command, numOne, numTwo] = commands[i].split(' ');
        numOne = Number(numOne);
        numTwo = Number(numTwo);

        switch (command) {
            case 'Add': arrayToNumber.push(numOne); break;
            case 'Remove': currentArray = arrayToNumber.filter(el => el !== numOne);
                arrayToNumber = currentArray; break;
            case 'RemoveAt': arrayToNumber.splice(numOne, 1); break;
            case 'Insert': arrayToNumber.splice(numTwo, 0, numOne); break;
        }
    }
    console.log(arrayToNumber.join(' '));
}

arrayManipulations(['6 12 2 65 6 42',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])