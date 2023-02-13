class List {
    constructor() {
        this.numbers = [];
        this.size = this.numbers.length;
    }

    add(el) {
        this.numbers.push(el);
        this.numbers.sort((a, b) => a - b);
        this.size = this.numbers.length;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Invalid index!');
        } else {
            this.numbers.splice(index, 1);
            this.size = this.numbers.length;
        }
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Invalid index!');
        } else {
            return this.numbers[index];
        }
    }
}

const list = new List();
list.add(2);
list.add(1);
list.add(3);
list.remove(2);
console.log(list.size);