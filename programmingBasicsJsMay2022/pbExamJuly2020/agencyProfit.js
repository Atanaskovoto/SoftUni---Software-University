function agencyProfit(input) {

    let companyName = input[0];
    let ticketsAdult = Number(input[1]);
    let ticketsChildren = Number(input[2]);
    let ticketsPriceAdult = Number(input[3]);
    let serviceFee = Number(input[4]);

    let ticketPriceChildren = ticketsPriceAdult * 0.30;
    let totalPriceAdults = ticketsAdult * (ticketsPriceAdult + serviceFee);
    let totalPriceChildren = ticketsChildren * (ticketPriceChildren + serviceFee);
    let profitAgency = (totalPriceAdults + totalPriceChildren) * 0.20;

    console.log(`The profit of your agency from ${companyName} tickets is ${profitAgency.toFixed(2)} lv.`)

}

agencyProfit(["WizzAir", "15", "5", "120", "40"])
