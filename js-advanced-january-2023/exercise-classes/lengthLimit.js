class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.slice(0, this.innerLength) + '...';
        }
        return this.innerString;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        this.innerLength -= value;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
}

const string = new Stringer('test', 5);
string.decrease(2);
console.log(string.innerLength);
console.log(string.toString());
string.increase(1);
console.log(string.toString());