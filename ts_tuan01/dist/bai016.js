"use strict";
//Create a generic class Box that can store any type of value.
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
}
const boxNumber = new Box(10);
console.log("boxNumber truoc khi setValue: ", boxNumber.getValue());
boxNumber.setValue(20);
console.log("boxNumber sau khi setValue: ", boxNumber.getValue());
const boxString = new Box("hello");
console.log("boxString truoc khi setValue: ", boxString.getValue());
boxString.setValue("xin chao");
console.log("boxString sau khi setValue: ", boxString.getValue());
