function changeBureau(input) {

    let bitcoin = Number(input[0]);
    let chineseYuan = Number(input[1]);
    let commission = Number(input[2]);

    let yuanToDollar = chineseYuan * 0.15;
    let bitcoinToLev = bitcoin * 1168;
    let dollarToLev = yuanToDollar * 1.76;

    let totalLev = bitcoinToLev + dollarToLev;
    let levToEuro = totalLev / 1.95;
    let totalcommission = (commission / 100) * levToEuro;
   
    let totalEuro = levToEuro - totalcommission;

    console.log(totalEuro.toFixed(2));

}
changeBureau(["20", "5678", "2.4"])
