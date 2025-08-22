"use strict";
class Car {
    constructor(brand, model, year) {
        this.info = () => {
            console.log(`brand: ${this.brand}`);
            console.log(`model: ${this.model}`);
            console.log(`year: ${this.year}`);
        };
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
const car = new Car("Toyota", "TYT1209", 2026);
car.info();
// tsc
// node dist/bai3.js  
