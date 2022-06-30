function moving(input) {
    let index = 0;
    let widgth = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let boxesCount = Number(input[index]);
    let done = input[index];
    index++;
    let freeSpace = widgth * length * height;
    
    while (done !== 'Done') {
        freeSpace -= boxesCount;
        if (freeSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        boxesCount = Number(input[index]);
        done = input[index++];
    }
    if (freeSpace > 0) {
        console.log(`${freeSpace} Cubic meters left.`);
    }
}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

