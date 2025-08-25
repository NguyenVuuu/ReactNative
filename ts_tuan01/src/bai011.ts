class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Dogs extends Animal {
  bark(): void {
    console.log("gau gau");
  }
}

class Cats extends Animal {
  meow(): void {
    console.log("meow meow");
  }
}

const dogs = new Dogs("tedy");
const cats = new Cats("Mimi");
dogs.bark();
cats.meow();
