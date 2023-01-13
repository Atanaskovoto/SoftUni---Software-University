function squareOfStars(n) {

    if (n && n > 0) {
        
        for (let i = 0; i < n; i++) {
    
            console.log('* '.repeat(n));
        }
    } else {

        for (let i = 0; i < 5; i++) {
    
            console.log('* '.repeat(5));
        }
    }
}

squareOfStars(0);
