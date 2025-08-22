"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.display = () => {
            console.log(`name: ${this.name}`);
            console.log(`age: ${this.age}`);
        };
        this.name = name;
        this.age = age;
    }
}
exports.default = Person;
