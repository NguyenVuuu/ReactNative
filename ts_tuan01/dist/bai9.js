"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log("gau gau");
    }
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log("meo meo");
    }
}
var dog = new Dog("tedy");
var cat = new Cat("mimi");
console.log(dog.sound());
console.log(cat.sound());
// tsc
// node dist/bai9.js
