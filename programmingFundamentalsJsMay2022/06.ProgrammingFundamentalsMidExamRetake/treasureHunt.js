function treasureHunt(input) {
    while (input[0].includes('|')) {
        input[0] = input[0].replace('|', ' ');
    }
    let treasureChest = input
        .shift()
        .split(' ');

    let index = 0;
    while (input[index] !== 'Yohoho!') {
        let treasures = input[index++].split(' ');
        let command = treasures.shift();
        for (let i = 0; i < treasures.length; i++) {
            switch (command) {
                case 'Loot': if (!treasureChest.includes(treasures[i])) {
                    treasureChest.unshift(treasures[i]);
                } break;
                case 'Drop': if (treasures[i] > 0 && treasures[i] < treasureChest.length) {
                    treasureChest.push(treasureChest.splice(treasures[i], 1));
                } break;
                case 'Steal': console.log(treasureChest.splice(-treasures[i]).join(', ')); break;
            }
        }
    }

    let sum = 0;
    let treasureCount = 0;
    for (let el of treasureChest) {
        sum += el.length;
        treasureCount++;
    }
    let treasureGain = (sum / treasureCount).toFixed(2)
    if (treasureGain > 0) {
        console.log(`Average treasure gain: ${treasureGain} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])