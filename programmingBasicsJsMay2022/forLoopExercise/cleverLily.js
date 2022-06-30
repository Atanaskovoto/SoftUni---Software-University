function cleverLily(input) {
    let lilysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toysPrice = Number(input[2]);

    let evenAgeGift = 0;
    let oddAgeGift = 0;
    let totalMoneyEven = 0;

    for (let i = 1; i <= lilysAge; i++) {
        if (i % 2 === 0) {
            evenAgeGift += 10;
            totalMoneyEven += evenAgeGift - 1;
        } else {
            oddAgeGift++;
        }
    }
    let totalMoneyOdd = oddAgeGift * toysPrice;
    let totalMoney = totalMoneyEven + totalMoneyOdd;

    if (totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"]);
