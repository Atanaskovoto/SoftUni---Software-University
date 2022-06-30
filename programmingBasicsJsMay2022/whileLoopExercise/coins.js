function coins(input) {
    let change = Number(input[0]);
    let penies = Math.round(change * 100);
    let peniesCount = 0;

    while (penies !== 0) {
        if ((penies - 200) >= 0) {
            peniesCount++;
            penies -= 200;
            continue;
        }
        if ((penies - 100) >= 0) {
            peniesCount++;
            penies -= 100;
            continue;
        }
        if ((penies - 50) >= 0) {
            peniesCount++;
            penies -= 50;
            continue;
        }
        if ((penies - 20) >= 0) {
            peniesCount++;
            penies -= 20;
            continue;
        }
        if ((penies - 10) >= 0) {
            peniesCount++;
            penies -= 10;
            continue;
        }
        if ((penies - 5) >= 0) {
            peniesCount++;
            penies -= 5;
            continue;
        }
        if ((penies - 2) >= 0) {
            peniesCount++;
            penies -= 2;
            continue;
        }
        if ((penies - 1) >= 0) {
            peniesCount++;
            penies -= 1;
            continue;
        }
    }
    console.log(peniesCount);
}
coins(["0.59"]);