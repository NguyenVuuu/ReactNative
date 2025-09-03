//20. Write a Vehicle interface and implement it in Car and Bike classes.
interface Vehicle {
  brand: string;

  start(): void;
  stop(): void;
}

class Car20 implements Vehicle {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
  start(): void {
    console.log(`${this.brand} start`);
  }
  stop(): void {
    console.log(`${this.brand} stop`);
  }
}

class Bike20 implements Vehicle {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
  start(): void {
    console.log(`${this.brand} start`);
  }
  stop(): void {
    console.log(`${this.brand} stop`);
  }
}

const car20 = new Car20("BMW");
car20.start();
car20.stop();

const bike20 = new Bike20("Yamaha");
bike20.start();
bike20.stop();
