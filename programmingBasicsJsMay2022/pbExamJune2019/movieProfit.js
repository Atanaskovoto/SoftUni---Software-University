function movieProfit(input) {

    let movie = input[0];
    let numberOfDays = Number(input[1]);
    let numberOfTickets = Number(input[2]);
    let ticketsPrice = Number(input[3]);
    let cinemaPercentage = Number(input[4]) / 100;

    let priceForDay = numberOfTickets * ticketsPrice;
    let priceForAllDays = priceForDay * numberOfDays;
    let totalPrice = priceForAllDays - priceForAllDays * cinemaPercentage;

    console.log(`The profit from the movie ${movie} is ${totalPrice.toFixed(2)} lv.`);
}
movieProfit(["Python Basics", "40", "34785", "10.45", "14"])