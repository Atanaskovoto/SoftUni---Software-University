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
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'

])