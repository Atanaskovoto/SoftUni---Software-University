function messageTranslator(input) {
    const numberOfLines = input.shift();
    const pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[A-Za-z]{8,})\]/;
    
    for (let i = 0; i < numberOfLines; i++) {
        let message = pattern.exec(input[i]);

        if (message == null) {
            console.log('The message is invalid');
        } else {

            const command = message.groups.command;
            const stringToTranslate = message.groups.string;
            const result = [];
            for (let i = 0; i < stringToTranslate.length; i++) {
                const currentValue = stringToTranslate.charCodeAt(i);
                result.push(currentValue);
            }
            console.log(`${command}: ${result.join(' ')}`);
        }
    }
}

messageTranslator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready']);