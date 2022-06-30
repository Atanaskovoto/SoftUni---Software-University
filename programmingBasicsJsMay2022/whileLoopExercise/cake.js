function cake(input) {
    let index = 0;
    let length = Number(input[index]);
    index++;
    let width = Number(input[index]);
    index++;
    let piecesCount = length * width;
    // let totalPieces = 0;
    let command = input[index];
    let currentPieces = Number(input[index]);
    index++

    while (command !== 'STOP') {
        piecesCount -= currentPieces;
        if (piecesCount <= 0) {
            break;
        }
        command = input[index];
        currentPieces = Number(input[index]);
        index++;
    }
    if (piecesCount > 0) {
        console.log(`${piecesCount} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(piecesCount)} pieces more.`);
    }
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
