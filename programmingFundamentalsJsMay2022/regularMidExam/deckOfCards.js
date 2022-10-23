function modifyCards(input) {
    let deckCards = input
        .shift()
        .split(', ');

    let commandsCount = Number(input.shift());

    for (let i = 0; i < commandsCount; i++) {
        let currentRow = input
            .shift()
            .split(', ');

        let command = currentRow[0];
        let cardName = currentRow[1];

        switch (command) {
            case 'Add':
                if (!deckCards.includes(cardName)) {
                    deckCards.push(cardName);
                    console.log('Card successfully added');
                } else {
                    console.log('Card is already in the deck');
                }
                break;

            case "Remove":
                if (deckCards.includes(cardName)) {
                    let index = deckCards.indexOf(cardName);
                    deckCards.splice(index, 1);
                    console.log('Card successfully removed');
                } else {
                    console.log('Card not found');
                }
                break;

            case 'Remove At': cardName = Number(cardName);
                if (deckCards[cardName]) {
                    deckCards.splice(cardName, 1);
                    console.log('Card successfully removed');
                } else {
                    console.log('Index out of range');
                }
                break;

            case 'Insert': let index = Number(cardName);
                cardName = currentRow[2];
                if (!deckCards[index]) {
                    console.log('Index out of range');
                } else if (deckCards.includes(cardName)) {
                    console.log('Card is already added');
                } else {
                    deckCards.splice(index, 0, cardName);
                    console.log('Card successfully added');
                }
                break;
        }
    }

    console.log(deckCards.join(', '));
}

modifyCards(['Ace of Diamonds, Queen of Hearts, King of Clubs', '3', 'Add, King of Diamonds', 'Insert, 2, Jack of Spades', 'Remove, Ace of Diamonds']);