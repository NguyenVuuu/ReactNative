"use strict";
// class Student {
//   name: string;
//   age: number;
//   grade: number;
//   constructor(name: string, age: number, grade: number) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name, age, grade) {
        this.display = () => {
            console.log(`name: ${this.name}`);
            console.log(`age: ${this.age}`);
            console.log(`grade: ${this.grade}d`);
        };
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}
exports.default = Student;
