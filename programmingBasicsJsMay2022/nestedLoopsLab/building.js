function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);


    for (let f = floors; f > 0; f--) {
        let row = '';
        for (let r = 0; r < rooms; r++) {
            if (f === floors) {
                row += ` L${f}${r}`;
            } else if (f % 2 === 0) {
                row += ` O${f}${r}`;
            } else {
                row += ` A${f}${r}`;
            }
        }
        console.log(row)
    }
}
building(["6", "4"])