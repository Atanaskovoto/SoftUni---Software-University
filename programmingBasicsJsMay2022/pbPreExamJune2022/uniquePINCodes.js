function uniquePINCodes(input) {
    let maxN1 = Number(input[0]);
    let maxN2 = Number(input[1]);
    let maxN3 = Number(input[2]);

    for (let n1 = 1; n1 <= maxN1; n1++) {

        if (n1 % 2 !== 0) {
            continue;
        }
        let pin1 = n1;
        for (let n2 = 2; n2 <= maxN2; n2++) {

            if (n2 === 4 || n2 === 6 || n2 === 8 || n2 === 9) {
                continue;
            }
            let pin2 = n2;
            for (let n3 = 1; n3 <= maxN3; n3++) {

                if (n3 % 2 !== 0) {
                    continue;
                }
                let pin3 = n3;
                console.log(`${pin1} ${pin2} ${pin3}`);
            }
        }
    }
}
uniquePINCodes(["8",
    "2",
    "8"])

