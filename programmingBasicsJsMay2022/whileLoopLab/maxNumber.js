function maxNumber(input) {
    let index = 0;
    let n1 = input[index];
    index++;
    let n2 = input[index];
    let number = 0;

    while (n1 !== 'Stop' && n2 !== 'Stop') {
        let convertToNumber1 = Number(n1);
        let convertToNumber2 = Number(n2);
        if (convertToNumber1 > convertToNumber2) {
            number = convertToNumber1;
            index++;
            n2 = input[index];
            continue;
        } else {
           number = convertToNumber2;
            index++;
            n1 = input[index];
            continue;
        }
    }
    console.log(number);
}
maxNumber(["-10",
"20",
"-30",
"Stop"])

