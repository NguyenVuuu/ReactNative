//30. Create a class School with list of Students and Teachers. Add method to display info.

class Student {
  name: string;
  grade: number;
  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
}
class Teacher30 {
  name: string;
  subject: string;
  constructor(name: string, subject: string) {
    this.name = name;
    this.subject = subject;
  }
}
class School {
  students: Student[] = [];
  teachers: Teacher30[] = [];

  addTeacher(teacher: Teacher30): void {
    this.teachers.push(teacher);
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  display(): void {
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
