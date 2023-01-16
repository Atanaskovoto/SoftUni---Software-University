function numberSequence(n, k) {

    let array = [1];

    for (let i = 1; i < n; i++) {

        let lastK = array.slice(-k);
        let sum = 0;

        for (const num of lastK) {
            sum += Number(num);
        }
        array.push(sum);
    }
    return array;
}

console.log(numberSequence(6, 3));
numberSequence(8, 2);