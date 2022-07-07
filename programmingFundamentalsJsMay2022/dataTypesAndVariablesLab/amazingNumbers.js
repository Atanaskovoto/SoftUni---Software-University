function amazingNumbers(num) {
    let numToString = String(num);
    let sum = 0;

    for (let i = 0; i < numToString.length; i++)
    sum += Number(numToString[i]);

    console.log(`${num} Amazing? ${String(sum).includes('9') ? 'True' : 'False'}`);
}
amazingNumbers(1233);
amazingNumbers(999);
