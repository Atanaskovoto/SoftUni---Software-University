function vacation(input) {
    let budget = Number(input[0]);
    let currentMoney = Number(input[1]);
    let index = 2;
    let action = input[index];
    index++;
    let money = Number(input[index]);
    let spendMoney = 0;
    let totalDays = 0;

    while (currentMoney < budget) {
        switch (action) {
            case 'spend': spendMoney++;
                currentMoney -= money;
                totalDays++
                break;
            case 'save': currentMoney += money;
                totalDays++
                spendMoney = 0;
                break;
        }
        if (currentMoney < 0) {
            currentMoney = 0;
        }
        if (spendMoney === 5) {
            console.log(`You can't save the money.`);
            console.log(totalDays);
            break;
        }
        index++;
        action = input[index];
        index++;
        money = Number(input[index]);
    }

    if (currentMoney >= budget) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])


