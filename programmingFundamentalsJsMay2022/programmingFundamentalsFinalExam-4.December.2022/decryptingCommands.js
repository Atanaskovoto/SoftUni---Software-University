function decryptingCommands(input) {
    let myString = input.shift();

    let currentLine = input.shift();
    while (currentLine !== 'Finish') {
        currentLine = currentLine.split(' ');
        const command = currentLine.shift();

        switch (command) {
            case 'Replace': const [curentChar, newChar] = currentLine;

                while (myString.includes(curentChar)) {
                    myString = myString.replace(curentChar, newChar);
                }

                console.log(myString);

                break;

            case 'Cut': let [startIndex, endIndex] = currentLine;

                if (myString[startIndex] && myString[endIndex]) {

                    endIndex++;

                    myString = myString.slice(0, startIndex).concat(myString.slice(endIndex));
                    console.log(myString);
                } else {
                    console.log('Invalid indices!');
                }

                break;

            case 'Make': const [secondCommand] = currentLine;

                switch (secondCommand) {
                    case 'Upper':
                        myString = myString.toUpperCase();
                        console.log(myString);
                        break;

                    case 'Lower':
                        myString = myString.toLowerCase();
                        console.log(myString);
                        break;
                }

                break;

            case 'Check': const [string] = currentLine;

                if (myString.includes(string)) {
                    console.log(`Message contains ${string}`);
                } else {
                    console.log(`Message doesn't contain ${string}`);
                }

                break;

            case 'Sum': let [start, end] = currentLine

                if (myString[start] && myString[end]) {
                    end++;

                    const result = myString.slice(start, end);

                    let sumOfChar = 0;
                    for (let i = 0; i < result.length; i++) {
                        let currentValue = result.charCodeAt(i);
                        sumOfChar += currentValue;
                    }

                    console.log(sumOfChar);
                } else {
                    console.log('Invalid indices!');
                }

                break;
        }

        currentLine = input.shift();
    }
}

decryptingCommands(['ILikeSoftUni', 'Replace I WE', 'Make Upper', 'Check SoftUni', 'Sum 1 4', 'Cut 1 4', 'Finish']);