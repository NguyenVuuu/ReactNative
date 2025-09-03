"use strict";
//19. Demonstrate method overriding using polymorphism with Animal and subclasses.
class Animal19 {
    sound() {
        console.log("Animal sound");
    }
}
class Dog19 extends Animal19 {
    sound() {
        console.log("gau gau");
    }
}
class Cat19 extends Animal19 {
    sound() {
        console.log("meo meo");
    }
}
const animals = [new Animal19(), new Dog19(), new Cat19()];
animals.forEach((animal) => animal.sound());
