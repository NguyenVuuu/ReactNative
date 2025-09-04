"use strict";
//30. Create a class School with list of Students and Teachers. Add method to display info.
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}
class Teacher30 {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
}
class School {
    constructor() {
        this.students = [];
        this.teachers = [];
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    addStudent(student) {
        this.students.push(student);
    }
    display() {
        console.log("Teacher list");
        this.teachers.forEach((teacher) => {
            console.log(`${teacher.name} teach ${teacher.subject}`);
        });
        console.log("Student list");
        this.students.forEach((student) => {
            console.log(`${student.name} study ${student.grade}`);
        });
    }
}
const school = new School();
school.addStudent(new Student("Nguyen Vu", 10));
school.addStudent(new Student("Nguyen Vu 2", 9));
school.addTeacher(new Teacher30("Nguyen Vu 3", "Math"));
school.addTeacher(new Teacher30("Nguyen Vu 4", "English"));
school.display();
