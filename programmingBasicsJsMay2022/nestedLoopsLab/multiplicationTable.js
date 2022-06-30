function multiplicationTable() {
    for (let a = 1; a <= 10; a++) {
        for (let b = 1; b <= 10; b++){
            let c = a * b;
            console.log(`${a} * ${b} = ${c}`);
        }
    }
}
multiplicationTable();