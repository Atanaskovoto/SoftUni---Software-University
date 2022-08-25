function convertToObject(jsonData) {
    let info = JSON.parse(jsonData);
    // Solution 1:
    // for (let key of Object.keys(info)) {
    //     console.log(`${key}: ${info[key]}`);
    // }

    // Solution 2:
    for (let [key, value] of Object.entries(info)) {
        console.log(`${key}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');