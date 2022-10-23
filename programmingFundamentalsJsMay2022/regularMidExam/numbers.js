function modifyNumbers(input) {
    let arrayOfNumbers = input
        .shift()
        .split(' ')
        .map(Number);

    let currentRow = input.shift();

    while (currentRow != 'Finish') {
        currentRow = currentRow.split(' ');
        let command = currentRow[0];
        let value = Number(currentRow[1]);

        switch (command) {
            case 'Add': arrayOfNumbers.push(value);
                break;

            case 'Remove': if (arrayOfNumbers.includes(value)) {
                let index = arrayOfNumbers.indexOf(value);
                arrayOfNumbers.splice(index, 1);
            }
                break;

            case 'Replace': if (arrayOfNumbers.includes(value)) {
                let replacementValue = Number(currentRow[2]);
                let index = arrayOfNumbers.indexOf(value);
                arrayOfNumbers.splice(index, 1, replacementValue);
            }
                break;

            case 'Collapse': arrayOfNumbers = arrayOfNumbers.filter(x => x >= value);
                break;
        }
        currentRow = input.shift();
    }

    console.log(arrayOfNumbers.join(' '));
}

modifyNumbers(['1 4 5 19', 'Collapse 1', 'Finish']);