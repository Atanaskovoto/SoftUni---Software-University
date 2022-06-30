function balls(input) {

    let numberOfBalls = Number(input[0]);
    let points = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let otherColor = 0;

    for (let index = 1; index <= numberOfBalls; index++) {
        let colorOfBalls = input[index];

        switch (colorOfBalls) {

            case 'red':
                points = points + 5;
                red++;
                break;
            case 'orange':
                points = points + 10;
                orange++
                break;
            case 'yellow':
                points = points + 15;
                yellow++;
                break;
            case 'white':
                points = points + 20;
                white++;
                break;
            case 'black':
                points = Math.floor(points / 2);
                black++;
                break;
            default:
                otherColor++;
                break;
        }


    }

    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${red}`);
    console.log(`Orange balls: ${orange}`);
    console.log(`Yellow balls: ${yellow}`);
    console.log(`White balls: ${white}`);
    console.log(`Other colors picked: ${otherColor}`);
    console.log(`Divides from black balls: ${black}`);

}

balls(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"])



