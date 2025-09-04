"use strict";
//28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
class Animal28 {
    makeSound() {
        console.log("animal sound");
    }
}
class Dog28 extends Animal28 {
    makeSound() {
        console.log("dog sound");
    }
    getSound() {
        this.makeSound();
    }
}
class Cat28 extends Animal28 {
    makeSound() {
        console.log("cat sound");
    }
    getSound() {
        return this.makeSound();
    }
}
const dog28 = new Dog28();
dog28.getSound();
const cat28 = new Cat28();
cat28.getSound();
