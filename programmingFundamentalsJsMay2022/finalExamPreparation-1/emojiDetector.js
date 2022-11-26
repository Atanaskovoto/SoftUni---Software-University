function emojiDetector(input) {
    const digitPattern = /\d/g;
    const emojiPattern = /(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g;

    let coolThreshold = 1;
    for (const el of input) {
        const allDigits = el.match(digitPattern);
        for (const digit of allDigits) {
            coolThreshold *= digit;
        }
    }

    let emojiCount = 0;
    const allEmojis = [];

    let currentEmoji = emojiPattern.exec(input);

    while (currentEmoji) {
        emojiCount++;
        const emoji = currentEmoji.groups['name'];

        let emojiCoolness = 0;
        for (const character of emoji) {
            const index = emoji.indexOf(character);
            emojiCoolness += emoji.charCodeAt(index);
        }

        if (emojiCoolness >= coolThreshold) {

            allEmojis.push(currentEmoji[0]);
        }

        currentEmoji = emojiPattern.exec(input);
    }

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    console.log(allEmojis.join('\n'));
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])