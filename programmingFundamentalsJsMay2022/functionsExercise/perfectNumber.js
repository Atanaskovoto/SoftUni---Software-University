function perfectNumber(number) {
    let currentNumber = number;
    let sum = 0;
    isPerfect = true;
    if (currentNumber < 1) {
        isPerfect = false;
    }
    while (currentNumber > 1) {
        let result = number / currentNumber;
       if (number % currentNumber === 0 ) {
        sum += result;
       }
       currentNumber--
    }
   if (sum !== number) {
    isPerfect = false;
   }
   if (isPerfect) {
    console.log('We have a perfect number!');
   }else {
    console.log("It's not so perfect.");
   }
}
perfectNumber(6);