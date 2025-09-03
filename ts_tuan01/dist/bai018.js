"use strict";
//18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
class MathUtil {
    constructor() { }
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error("khong the chia 0");
        }
        return a / b;
    }
}
console.log("+: ", MathUtil.add(4, 2));
console.log("-: ", MathUtil.subtract(4, 2));
console.log("*: ", MathUtil.multiply(4, 2));
console.log("/: ", MathUtil.divide(4, 2));
