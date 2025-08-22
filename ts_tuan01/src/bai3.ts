class Car {
  brand: string;
  model: string;
  year: number;
  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  info = () => {
    console.log(`brand: ${this.brand}`);
    console.log(`model: ${this.model}`);
    console.log(`year: ${this.year}`);
  };
}
const car = new Car("Toyota", "TYT1209", 2026);
car.info()
// tsc
// node dist/bai3.js  