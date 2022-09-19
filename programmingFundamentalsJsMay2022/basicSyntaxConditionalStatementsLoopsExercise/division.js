function division(number) {
    if (number % 10 === 0) {
        console.log('The number is divisible by 10');
    } else if (number % 7 === 0) {
        console.log('The number is divisible by 7');
    } else if (number % 6 === 0) {
        console.log('The number is divisible by 6');
    }else if (number % 3 === 0) {
        console.log('The number is divisible by 3');
    }else if (number % 2 === 0) {
        console.log('The number is divisible by 2');
    } else {
        console.log('Not divisible');
    }

    // Another solution:
     
    // let divisibleByNumber = 0;

    // if (number % 10 === 0) {
    //     divisibleByNumber = 10;
    // } else if (number % 7 === 0) {
    //     divisibleByNumber = 7;
    // } else if (number % 6 === 0) {
    //     divisibleByNumber = 6;
    // } else if (number % 3 === 0) {
    //     divisibleByNumber = 3;
    // } else if (number % 2 === 0) {
    //     divisibleByNumber = 2;
    // }

    // if (divisibleByNumber !== 0) {
    //     console.log(`The number is divisible by ${divisibleByNumber}`);
    // } else {
    //     console.log('Not divisible');
    // }
}
division(1642)