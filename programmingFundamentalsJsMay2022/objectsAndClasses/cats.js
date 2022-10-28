function cats(array) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let el of array) {
        let catInfo = el.split(' ');
        let myCat = new Cat(catInfo[0], catInfo[1]);
        myCat.meow()
    }
    // Another solution:
    //  for (const el of data) {
    //     let [name, age] = el.split(' ');

    //     const cat = new Cat(name, age);
    //     cat.meow();
    // }
}
cats(['Mellow 2', 'Tom 5']);