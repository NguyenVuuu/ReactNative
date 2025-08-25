interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  sound(): void {
    console.log("gau gau");
  }
}

class Cat implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound(): void {
    console.log("meo meo");
  }
}
var dog = new Dog("tedy");
var cat = new Cat("mimi");
console.log(dog.sound());
console.log(cat.sound());

// tsc
// node dist/bai9.js
