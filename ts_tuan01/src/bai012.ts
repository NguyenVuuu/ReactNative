interface Flyable {
  fly(): void;
}
interface Swimamable {
  swim(): void;
}

class Bird implements Flyable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  fly(): void {
    console.log(this.name + " is flying");
  }
}

class Fish implements Swimamable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  swim(): void {
    console.log(this.name + " is swimming");
  }
}
const bird = new Bird("chip");
const fish = new Fish("nemo");
bird.fly();
fish.swim();
