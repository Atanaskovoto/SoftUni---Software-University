function solve(number) {
    return (n) => n + number;
}

let add5 = solve(3);
console.log(add5(5));