function townsToJson(input) {
    function trim(data) {
        const info = data.split('|');
        info.pop();
        info.shift();
        return [a, b, c] = info.map(el => el = el.trim());
    }

    const townInfo = [];
    const [town, latitude, longitude] = trim(input.shift());

    input.forEach(element => {
        const [name, lat, long] = trim(element);
        const currentTown = {
            Town: name,
            Latitude: Number(Number(lat).toFixed(2)),
            Longitude: Number(Number(long).toFixed(2)),
        };
        townInfo.push(currentTown);
    });

    console.log(JSON.stringify(townInfo));
}


townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);