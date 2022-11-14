function aMinerTask(input) {
    const resources = {}

    for (let index = 0; index < input.length; index += 2) {
        const name = input[index];
        const value = Number(input[index + 1]);
        if (!resources.hasOwnProperty(name)) {
            resources[name] = 0;
        }

        resources[name] += value;
    }

    for (const key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }
}

aMinerTask(
    ['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']
);