function reverseInPlace(array) {
    
    let printLine = '';
    for (let i = array.length - 1; i >= 0; i--) {
        printLine += `${array[i]} `;
    }
        console.log(printLine);
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);