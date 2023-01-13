function sameNumbers(number) {

    const string = String(number);
    const firstchar = string[0];
    let isTheSame = true;
    let sum = 0;

    for (const el of string) {
        if (firstchar !== el) {
            isTheSame = false;
        }

        sum += Number(el);
    }

    console.log(isTheSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);