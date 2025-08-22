"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    perimeter() {
        const chuvi = (this.width + this.height) / 2;
        console.log(chuvi);
    }
}
const hcn = new Rectangle(10, 2);
hcn.perimeter();
// tsc
// node dist/bai4.js  
