function birthdayParty(a) {

    let rent = Number(a);
    let cake = rent * 0.20;
    let drinks = cake * 0.55;
    let animator = rent / 3;

    let totalMoney = rent + cake + drinks + animator;

    console.log(totalMoney);

}
birthdayParty('2250')