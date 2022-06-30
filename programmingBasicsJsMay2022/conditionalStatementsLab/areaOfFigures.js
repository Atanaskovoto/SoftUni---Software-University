function areaOfFigures(input) {

    let figures = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    // square, rectangle, circle или triangle
    if (figures === 'square') {

        console.log((a * a).toFixed(3));

    } else if (figures === 'rectangle') {

        console.log((a * b).toFixed(3));

    } else if (figures === 'circle') {

        console.log((a * a * Math.PI).toFixed(3));

    } else if (figures === 'triangle') {

        console.log((a * b / 2).toFixed(3));
    }

}

areaOfFigures(["rectangle",
"7",
"2.5"])
