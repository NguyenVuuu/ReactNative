"use strict";
//Create an abstract class Shape with method area(). Implement Square and Circle.
class Shape {
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const square = new Square(5);
console.log("square area: ", square.area());
const circle = new Circle(5);
console.log("circle area: ", circle.area());
