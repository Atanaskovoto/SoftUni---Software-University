function plantDiscovery(input) {
    const flowersCount = input.shift();

    const flowers = {};
    for (let i = 0; i < flowersCount; i++) {
        const [flower, rarity] = input[0].split('<->');
        flowers[flower] = {
            rarity: Number(rarity),
            ratings: []
        }
        input.shift();
    }


    let index = 0;
    while (input[index] !== 'Exhibition') {
        const [command, flowerInfo] = input[index].split(': ');
        const [flower, value] = flowerInfo.split(' - ');

        if (flowers[flower]) {

            switch (command) {
                case 'Rate':
                    const rating = Number(value);
                    flowers[flower].ratings.push(rating);
                    break;

                case 'Update':
                    const rarity = Number(value);
                    flowers[flower].rarity = rarity;
                    break;

                case 'Reset':
                    flowers[flower].ratings = [];
                    break;
            }
        } else {
            console.log('error');
        }

        index++;
    }

    console.log('Plants for the exhibition:');

    for (const flower in flowers) {

        let sum = 0;
        const ratingCount = flowers[flower].ratings.length;
        for (const el of flowers[flower].ratings) {
            sum += el;
        }

        let averageRating = sum / ratingCount;
        if (!averageRating) {
            averageRating = 0;
        }

        console.log(`- ${flower}; Rarity: ${flowers[flower].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

}

plantDiscovery(["3",

    "Arnoldii<->4",

    "Woodii<->7",

    "Welwitschia<->2",

    "Rate: Woodii - 10",

    "Rate: Welwitschia - 7",

    "Rate: Arnoldii - 3",

    "Rate: Woodii - 5",

    "Update: Woodii - 5",

    "Reset: Arnoldii",

    "Exhibition"]);