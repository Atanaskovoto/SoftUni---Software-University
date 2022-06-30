function traveling(input) {
    let index = 0;
    let destination = input[index++];
    let budget = Number(input[index++]);
    let currentMoney = Number(input[index]);
    let action = input[index++];
    let savedMoney = currentMoney;

    while (action !== 'End') {
        if (destination === 'End') {
            break;
        }
        while (savedMoney < budget) {
            currentMoney = Number(input[index++]);
            savedMoney += currentMoney;
        }
        console.log(`Going to ${destination}!`);
        action = input[index];
        destination = input[index++];
        budget = Number(input[index++]);
        currentMoney = Number(input[index++]);
        savedMoney = currentMoney;
    }
}
traveling([
"End"])


