function theImitationGame(input) {
    let code = input.shift();

    let index = 0;
    while (input[index] != 'Decode') {
        const currentLine = input[index].split('|');
        const command = currentLine.shift();

        switch (command) {
            case 'Move':
                const lettersCount = currentLine.shift();
                code = code.slice(lettersCount).concat(code.slice(0, lettersCount));
                break;

            case 'Insert':
                const [index, value] = currentLine;
                let arrayOfCharacters = code.split('')
                arrayOfCharacters.splice(index, 0, value);
                code = arrayOfCharacters.join('');
                break;

            case 'ChangeAll':
                const [character, newCharacter] = currentLine;
                while (code.includes(character)) {
                    code = code.replace(character, newCharacter);
                }
                break;
        }

        index++;
    }

    console.log(`The decrypted message is: ${code}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']
);