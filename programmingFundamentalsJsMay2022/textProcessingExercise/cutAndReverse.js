function cutAndReverse(string) {
    let halfOne = string.substring(0, string.length / 2);
    let halfTwo = string.substring(string.length / 2);

    const result = [halfOne, halfTwo];

    result.forEach(word => {
        let currentArray = word
            .split('')
            .reverse();
        word = currentArray.join('');
        console.log(word);
    });
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');