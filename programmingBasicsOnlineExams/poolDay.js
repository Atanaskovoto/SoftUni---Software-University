function poolDay(input){
     let people = Number(input[0]);
     let entryFee = Number(input[1]);
     let priceSunbed = Number(input[2]);
     let priceUmbrela = Number(input[3]);
     
     let totalPrice = people * entryFee +
     priceUmbrela * Math.ceil(people / 2) +
     priceSunbed * Math.ceil(people * 0.75);
    
     console.log(totalPrice.toFixed(2) + ' lv.');
}
poolDay(['21','5.50','4.40','6.20'])