function palindromeIntegers(array) {
    for (let l = 0; l < array.length; l++) {
        let isPalindrome = true;
        let currentString = array[l].toString();
        for (let i = 0; i < currentString.length / 2; i++) {
            let leftNumber = currentString[i];
            let rightNumber = currentString[currentString.length - 1 - i];
            if (leftNumber !== rightNumber) {
                isPalindrome = false;
            }
        }
        console.log(isPalindrome);
    }
}
palindromeIntegers([123, 323, 421, 121])