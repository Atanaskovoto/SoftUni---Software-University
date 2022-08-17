function arrayManipulator(array, commands) {

    for (let i = 0; i < commands.length; i++) {
        let currentArray = commands[i].split(' ');
        let currentCommand = currentArray.shift();
        currentArray = currentArray.map(Number);

        switch (currentCommand) {
            case 'add': array.splice(currentArray[0], 0, currentArray[1]); break;
            case 'addMany': for (let r = currentArray.length - 1; r > 0; r--) {
                array.splice(currentArray[0], 0, currentArray[r]);
            }; break;
            case 'contains': console.log(array.indexOf(currentArray[0])); break;
            case 'remove': array.splice(currentArray[0], 1); break;
            case 'shift': for (let j = 0; j < currentArray[0]; j++) {
                array.push(array.shift());
            }; break;
            case 'sumPairs':
                if (array.length % 2 !== 0) {
                    array.push(0);
                }
                let arrayL = array.length / 2;
                for (let k = 0; k < arrayL; k++) {
                    let sum = array[0] + array[1];
                    array.push(sum);
                    array.splice(0, 2);
                } break;
            case 'print': console.log(`[ ${array.join(', ')} ]`);break;
        }
    }
}
arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"])
