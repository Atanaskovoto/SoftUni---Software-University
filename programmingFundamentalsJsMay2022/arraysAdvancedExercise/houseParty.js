function houseParty(array) {
    let rezultArray = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');
        let name = command[0];

        if (!command.includes('not')) {
            if (rezultArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                rezultArray.push(name);
            }
        } else {
            if (rezultArray.includes(name)) {
                let index = rezultArray.indexOf(`${name}`)
                rezultArray.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(rezultArray.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])