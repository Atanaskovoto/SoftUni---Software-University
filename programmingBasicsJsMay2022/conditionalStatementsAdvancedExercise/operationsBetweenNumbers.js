function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    let result;
    let count = 0;

    if (n2 !== 0) {
        switch (operator) {
            case '+': result = n1 + n2;
                count++;
                break;
            case '-': result = n1 - n2;
                count++;
                break;
            case '*': result = n1 * n2;
                count++;
                break;
        }
        if (result % 2 === 0 && count === 1) {
            console.log(`${n1} ${operator} ${n2} = ${result} - even`);
        } else if (count === 1) {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`);
        }
        switch (operator) {
            case '/': result = n1 / n2;
                console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
                break;
            case '%': result = n1 % n2;
                console.log(`${n1} ${operator} ${n2} = ${result}`);
        }
    } else {
        console.log(`Cannot divide ${n1} by zero`);
    }
}
operationsBetweenNumbers(["123",
    "12",
    "/"])

