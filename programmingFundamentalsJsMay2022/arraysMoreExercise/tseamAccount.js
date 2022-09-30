function tseamAccount(input) {
    let index = 0;
    let games = input[index++].split(' ');
    let data = input[index++];

    while (data !== 'Play!') {
        let arrayOfData = data.split(' ');
        let command = arrayOfData[0];
        let game = arrayOfData[1];

        data = input[index++];

        switch (command) {
            case 'Install': if (!games.includes(game)) {
                games.push(game);
            } break;
            case 'Uninstall': if (games.includes(game)) {
                let indexOfgame = games.indexOf(game);
                games.splice(indexOfgame, 1);
            } break;
            case 'Update': if (games.includes(game)) {
                let indexOfgame = games.indexOf(game);
                let buffer = games[indexOfgame];
                games.splice(indexOfgame, 1);
                games.push(buffer);
            } break;
            case 'Expansion': let bufferArray = game.split('-');
                let currentGame = bufferArray[0];
                if (games.includes(currentGame)) {
                    let indexOfgame = games.indexOf(currentGame);
                    let currentExpansion = game.replace('-', ':')
                    games.splice(indexOfgame + 1, 0, currentExpansion);
                } break;
        }
    }
    console.log(games.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);