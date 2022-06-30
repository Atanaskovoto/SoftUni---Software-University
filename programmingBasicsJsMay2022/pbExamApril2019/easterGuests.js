function easterGuests(input) {

    let guests = Number(input[0]);
    let budget = Number(input[1]);

    let easterBread = Math.ceil(guests / 3);
    let eggs = guests * 2;

    let priceEasterBread = easterBread * 4;
    let priceEggs = eggs * 0.45;

    let totalPrice = priceEasterBread + priceEggs;

    if (budget >= totalPrice) {

        console.log(`Lyubo bought ${easterBread} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${(budget - totalPrice).toFixed(2)} lv. left.`);

    } else {

        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(totalPrice - budget).toFixed(2)} lv. more.`)

    }

}

easterGuests(["10",
"35"])
