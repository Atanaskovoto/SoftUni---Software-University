function depositCalculator(input) {
    let deposit = Number(input[0]);
    let termDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]) / 100;

    let totalMoney = deposit + termDeposit * ((deposit * annualInterestRate) / 12);

    console.log(totalMoney);
}
depositCalculator(['200', '3', '5.7']);