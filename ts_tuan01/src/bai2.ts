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

interface Person {
  name: string;
  age: number;
}
interface Student extends Person {
  grade: number;
}
 class Student {
  constructor(name: string, age: number, grade: number) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  display = () => {
    console.log(`name: ${this.name}`);
    console.log(`age: ${this.age}`);
    console.log(`grade: ${this.grade}d`);
  };
}

export default Student;