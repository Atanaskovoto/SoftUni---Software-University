function movieProfit(input) {
    let namemovie = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let priceTickets = Number(input[3]);
    let profitPercent = Number(input[4]);
    let totalProfit = tickets * priceTickets * days;
    let total =totalProfit - totalProfit * (profitPercent / 100);

    console.log(`The profit from the movie ${namemovie} is ${total.toFixed(2)} lv.`)
}
movieProfit(['The Programmer', '20', '500', '7.50', '7'])