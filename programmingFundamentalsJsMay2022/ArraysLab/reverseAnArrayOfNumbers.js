function reverseAnArrayOfNumbers(n, input) {
let array = [];
for (let i = 0; i < n; i++) {
    let currnetIndex = input[i];
    array[i] = currnetIndex;
}

let printLine = '';
for (let i = array.length - 1; i >=0; i--) {
    
    if (i === 0) {
        printLine += `${array[i]}`;
    } else {
        printLine += `${array[i]} `;
    }
}
console.log(printLine);
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])