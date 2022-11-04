function employees(input) {
    class Employee {
        constructor(name, number) {
            this.name = name;
            this.personalNumber = number
        }
        print() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }

    for (let name of input) {
        let currentEmployee = new Employee(name, name.length);
        currentEmployee.print()

    }

    // Another solution:

    // for (let el of input) {

    //     let employee = {
    //         name: el,
    //         nameLength: el.length,
    //     }

    //     console.log(`Name: ${employee.name} -- Personal Number: ${employee.nameLength}`);
    // }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'

])