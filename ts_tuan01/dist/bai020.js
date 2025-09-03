"use strict";
class Car20 {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} start`);
    }
    stop() {
        console.log(`${this.brand} stop`);
    }
}
class Bike20 {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(`${this.brand} start`);
    }
    stop() {
        console.log(`${this.brand} stop`);
    }
}
const car20 = new Car20("BMW");
car20.start();
car20.stop();
const bike20 = new Bike20("Yamaha");
bike20.start();
bike20.stop();
