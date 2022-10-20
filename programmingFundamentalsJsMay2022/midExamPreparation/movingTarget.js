function movingTarget(input) {
    let sequenceOfTargets = input
        .shift()
        .split(' ')
        .map(Number);

    let index = 0;
    let currentLine = input[index++];    
    // let currentLine = input.shift();

    while (currentLine !== 'End') {

        let [command, indexOfTarget, value] = currentLine.split(' ');
        indexOfTarget = Number(indexOfTarget);
        value = Number(value);

        switch (command) {
            case 'Shoot': if (indexOfTarget >= 0 && indexOfTarget < sequenceOfTargets.length) {
                sequenceOfTargets[indexOfTarget] -= value;
                if (sequenceOfTargets[indexOfTarget] <= 0) {
                    sequenceOfTargets.splice(indexOfTarget, 1);
                }
            }
                break;

            case 'Add': if (indexOfTarget >= 0 && indexOfTarget < sequenceOfTargets.length) {
                sequenceOfTargets.splice(indexOfTarget, 0, value);
            } else {
                console.log('Invalid placement!');
            }
                break;
            case 'Strike': if (indexOfTarget - value >= 0 && indexOfTarget + value < sequenceOfTargets.length) {
                sequenceOfTargets.splice(indexOfTarget - value, value * 2 + 1);
            } else {
                console.log('Strike missed!');
            }
                break;
        }

        currentLine = input[index++];
        // currentLine = input.shift();
    }

    console.log(sequenceOfTargets.join('|'));
}

movingTarget(["1 2 3 4 5",
    "Strike 0 0",
    "Add 0 0",
    "Shoot 1 1 ",
    "End"])