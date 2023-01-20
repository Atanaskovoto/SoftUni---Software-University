function townPopulation(input) {
    const townInfo = {};

    for (const town of input) {
        const [name, population] = town.split(' <-> ');

        if (!townInfo[name]) {
            townInfo[name] = 0;
        }

        townInfo[name] += Number(population);
    }

    for (const key in townInfo) {
        console.log(`${key} : ${townInfo[key]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);