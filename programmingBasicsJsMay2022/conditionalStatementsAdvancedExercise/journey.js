function journey(input) {

    let budget = Number(input[0]);
    let seasson = input[1];

    let moneySpend;
    let placeToStay;
    let placeToGo;

    if (budget <= 100) {
        placeToGo = 'Bulgaria'
        switch (seasson) {
            case 'summer':
                moneySpend = budget * 0.30;
                placeToStay = 'Camp';
                break;
            case 'winter':
                moneySpend = budget * 0.70;
                placeToStay = 'Hotel';
                break;
        }
    } else if (budget <= 1000) {
        placeToGo = 'Balkans'
        switch (seasson) {
            case 'summer':
                moneySpend = budget * 0.40;
                placeToStay = 'Camp';
                break;
            case 'winter':
                moneySpend = budget * 0.80;
                placeToStay = 'Hotel';
                break;
        }
    } else if (budget > 1000) {
        placeToGo = 'Europe'
        switch (seasson) {
            case 'summer':
            case 'winter':
                moneySpend = budget * 0.90;
                placeToStay = 'Hotel';
                break;
        }
    }
    console.log(`Somewhere in ${placeToGo}`);
    console.log(`${placeToStay} - ${moneySpend.toFixed(2)}`);

}
journey(["75", "winter"]);