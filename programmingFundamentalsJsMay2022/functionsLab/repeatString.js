function repeatString(string, repeat) {
    let result = '';
    while (repeat > 0) {
        result += string;
        repeat--;
    }
    return result;
}
let finalResult = repeatString('abc', 3)
console.log(finalResult);