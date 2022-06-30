function accountBalance(input) {
    let index = 0;
    let payment = input[index];
    let totalMoney = 0;

    while (payment !== 'NoMoreMoney') {
        let convertToNumber = Number(payment);
        if (convertToNumber < 0) {
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${convertToNumber.toFixed(2)}`);
        totalMoney += convertToNumber;
        index++;
        payment = input[index];
    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);
}
accountBalance(["120",
"45.55",
"-150"])

