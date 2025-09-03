//Create a generic class Box that can store any type of value.
class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(newValue: T): void {
    this.value = newValue;
  }
}

const boxNumber = new Box<number>(10);
console.log("boxNumber truoc khi setValue: ", boxNumber.getValue());
boxNumber.setValue(20);
console.log("boxNumber sau khi setValue: ", boxNumber.getValue());

const boxString = new Box<string>("hello");
console.log("boxString truoc khi setValue: ", boxString.getValue());
boxString.setValue("xin chao");
console.log("boxString sau khi setValue: ", boxString.getValue());
