//19. Demonstrate method overriding using polymorphism with Animal and subclasses.
class Animal19 {
  sound(): void {
    console.log("Animal sound");
  }
}

class Dog19 extends Animal19 {
  sound(): void {
    console.log("gau gau");
  }
}

class Cat19 extends Animal19 {
  sound(): void {
    console.log("meo meo");
  }
}

const animals: Animal19[] = [new Animal19(), new Dog19(), new Cat19()];

animals.forEach((animal) => animal.sound());
