function argumentInfo(...params) {
    const info = {};

    params.forEach(el => {
        const type = typeof el;

        if (!info[type]) {
            info[type] = 0;
        }

        info[type]++;
        console.log(`${type}: ${el}`);
    });

    Object.entries(info).sort((a, b) => b[1] - a[1]).forEach(el => {
        console.log(`${el[0]} = ${el[1]}`);
    });
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });