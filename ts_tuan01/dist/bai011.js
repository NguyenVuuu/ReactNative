"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dogs extends Animal {
    bark() {
        console.log("gau gau");
    }
}
class Cats extends Animal {
    meow() {
        console.log("meow meow");
    }
}
const dogs = new Dogs("tedy");
const cats = new Cats("Mimi");
dogs.bark();
cats.meow();
