"use strict";
//14. Create a base class Employee. Extend Manager and Developer with specific methods.
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
class Manager extends Employee {
    manage() {
        console.log(`Manager ${this.name} is managing`);
    }
}
class Developer extends Employee {
    develop() {
        console.log(`Developer ${this.name} is developing`);
    }
}
const manager = new Manager("Tony", 2000000);
manager.work();
manager.manage();
const developer = new Developer("Steve", 2000);
developer.work();
developer.develop();
