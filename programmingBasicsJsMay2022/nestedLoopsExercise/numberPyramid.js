function numberPyramid(input) {
    let n = Number(input[0]);
    let bufffer = 1;
    let flag = false;

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let y = 1; y <= i; y++) {
            if (bufffer > n) {
                flag = true;
                break;
            }
            row += `${bufffer} `;
            bufffer++;
        }
        console.log(row);
        if (flag) {
            break;
        }
    }
}
numberPyramid(["15"])