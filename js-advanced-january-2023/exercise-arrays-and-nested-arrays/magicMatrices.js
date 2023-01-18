function magicMatrices(input) {
    let sumRow = 0;
    let sumColumn = 0;
    let isMagical = true;

    input[0].forEach(element => {
        sumRow += element;
    });
    input.forEach(element => {
        sumColumn += element[0]
    });

    for (let index = 1; index < input.length; index++) {
        const element = input[index];
        let currentSumRow = 0;
        let currentSumColumn = 0;
        element.forEach(el => {
            currentSumRow += el;
        });
        input.forEach(element => {
            currentSumColumn += element[index]
        });
        if (sumRow !== currentSumRow || sumColumn !== currentSumColumn) {
            isMagical = false;
        }
    }

    console.log(isMagical);
}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);
magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);