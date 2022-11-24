function activationKeys(input) {
    let rawKey = input.shift();

    let index = 0;
    while (input[index] !== 'Generate') {
        const currentLine = input[index].split('>>>');
        const command = currentLine.shift();

        switch (command) {
            case 'Contains': const [word] = currentLine;
                if (rawKey.includes(word)) {
                    console.log(`${rawKey} contains ${word}`);
                } else {
                    console.log('Substring not found!');
                }
                break;

            case 'Flip': const [changeTo, startIndex, endIndex] = currentLine;
                switch (changeTo) {
                    case 'Upper': let changedString = rawKey.slice(startIndex, endIndex);
                        const stringToChange = rawKey.slice(startIndex, endIndex);
                        changedString = changedString.toUpperCase();
                        rawKey = rawKey.replace(stringToChange, changedString);
                        console.log(rawKey);
                        break;

                    case 'Lower': let newString = rawKey.slice(startIndex, endIndex);
                        const stringChange = rawKey.slice(startIndex, endIndex);
                        newString = newString.toLowerCase();
                        rawKey = rawKey.replace(stringChange, newString);
                        console.log(rawKey);
                        break;
                }
                break;

            case 'Slice': const [start, end] = currentLine;
                const string = rawKey.slice(start, end);
                rawKey = rawKey.replace(string, '');
                console.log(rawKey);
                break;
        }

        index++;
    }

    console.log(`Your activation key is: ${rawKey}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])