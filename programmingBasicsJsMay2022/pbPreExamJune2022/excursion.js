function excursion(input) {
    let peopleCount = Number(input[0]);
    let nigthsToStay = Number(input[1]);
    let busCardCount = Number(input[2]);
    let ticketsCount = Number(input[3]);
    
    let moneyForSleep = nigthsToStay * 20;
    let moneyForBusCard = busCardCount * 1.60;
    let moneyForTickets = ticketsCount * 6;
    
    let moneyForOnePerson = moneyForBusCard + moneyForSleep + moneyForTickets;
    let totalMoney = moneyForOnePerson * peopleCount;
    
    console.log(`${(totalMoney * 1.25).toFixed(2)}`);
}
excursion(["20",
"14",
"30",
"6"])
