function searchForANumber(array, values) {
    let newArray = array.slice(0, values[0]);
    let finalArray = newArray.slice(values[1] - newArray.length);
    let count = 0;
    while (finalArray.includes(values[2])) {
        let index = finalArray.indexOf(values[2]);
        finalArray.splice(index, 1);
        count++;
    }
    console.log(`Number ${values[2]} occurs ${count} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])