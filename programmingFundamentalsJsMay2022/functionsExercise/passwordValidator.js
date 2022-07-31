function passwordValidator(password) {
    let isValidLength = true;
    let isValidLettersAndDigits = true;
    let isValidTwoDigits = true;
    let digitsCounter = 0;
    let passwordString = password.toString();
    if (passwordString.length < 6 || passwordString.length > 10) {
        isValidLength = false;
    }
    for (let el of password) {
        let currentChar = el.charCodeAt(0);
        if (currentChar > 122) {
            isValidLettersAndDigits = false;
        } else if (currentChar < 97 && currentChar > 90) {
            isValidLettersAndDigits = false;
        } else if (currentChar < 65 && currentChar > 57) {
            isValidLettersAndDigits = false;
        } else if (currentChar < 48) {
            isValidLettersAndDigits = false;
        }
        if (currentChar > 47 && currentChar < 58) {
            digitsCounter++;
        }
    }
    if (digitsCounter < 2) {
        isValidTwoDigits = false;
    }
    if (isValidLength && isValidLettersAndDigits && isValidTwoDigits) {
        console.log('Password is valid');
    }
    if (!isValidLength) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isValidLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }
    if (!isValidTwoDigits) {
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('login')