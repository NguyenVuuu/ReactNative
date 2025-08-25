"use strict";
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log(this.name + " is flying");
    }
}
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(this.name + " is swimming");
    }
}
const bird = new Bird("chip");
const fish = new Fish("nemo");
bird.fly();
fish.swim();
