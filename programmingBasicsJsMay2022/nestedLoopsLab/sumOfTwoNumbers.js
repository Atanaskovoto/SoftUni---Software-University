function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let stop = false;

    for (let a = startNumber; a <= endNumber; a++) {
        for (let b = startNumber; b <= endNumber; b++) {
            counter++;
            if ((a + b) === magicNumber) {
                stop = true;
                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`);
                break;
            }
        }
        if (stop) {
            break;
        }
    }
    if (!stop) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}
sumOfTwoNumbers(["88", 
"888", 
"2000"])




