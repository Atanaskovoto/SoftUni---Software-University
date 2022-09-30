function addAndRemove(input) {
    let number = 1;
    let rezult = [];

    for (let el of input) {

        switch (el) {
            case 'add': rezult.push(number); break;
            case 'remove': rezult.pop(); break;
        }
        number++;
    }
    rezult.length == 0 ? console.log('Empty') : console.log(rezult.join(' '));
}
addAndRemove(['remove', 'remove', 'remove']);