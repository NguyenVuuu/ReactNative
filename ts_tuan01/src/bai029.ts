//29. Create an interface Movable with method move(). Implement it in Car and Robot.
interface Movable {
  move(): void;
}

class Car29 implements Movable {
  move(): void {
    console.log("Car is moving");
  }
}
class Robot29 implements Movable {
  move(): void {
    console.log("Robot is moving");
  }
}

const car29 = new Car29();
car29.move();

const robot29 = new Robot29();
robot29.move();
