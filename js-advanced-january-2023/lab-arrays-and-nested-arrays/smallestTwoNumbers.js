function smallestTwoNumbers(input) {
    const result = [];
    
    for (let i = 0; i < 2; i++) {
        const minNumber = Math.min(...input);
        const index = input.indexOf(minNumber);
        result.push(input.splice(index, 1));
    }

    console.log(result.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);