function bombNumbers(array, specialArray) {
    let bombNumber = specialArray[0];
    let bombPower = specialArray[1];
    let indexToBomb = array.indexOf(bombNumber);
    while (indexToBomb !== -1) {
        array.splice(indexToBomb, (bombPower + 1));
        if (indexToBomb < bombPower) {
            bombPower = indexToBomb
        }
        array.splice((indexToBomb - bombPower), bombPower);
        indexToBomb = array.indexOf(bombNumber);
        bombPower = specialArray[1];
    }
    let rezult = 0;
    for (let el of array) {
        rezult += el;
    }
    console.log(rezult);
}
bombNumbers([1, 1, 2, 1, 1, 1, 2, 3, 1, 1, 1], [2, 3])