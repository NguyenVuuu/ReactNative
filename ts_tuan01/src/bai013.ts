//Create an abstract class Shape with method area(). Implement Square and Circle.
abstract class Shape {
  abstract area(): number;
}

class Square extends Shape {
  side: number;
  constructor(side: number) {
    super();
    this.side = side;
  }
  area(): number {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const square = new Square(5);
console.log("square area: ", square.area());

const circle = new Circle(5);
console.log("circle area: ", circle.area());
