"use strict";
//21. Create a generic Repository class with methods add(), getAll().
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const numberRep = new Repository();
numberRep.add(1);
numberRep.add(2);
console.log("number list", numberRep.getAll());
const stringRep = new Repository();
stringRep.add("a");
stringRep.add("b");
console.log("string list", stringRep.getAll());
const userRep = new Repository();
userRep.add({ name: "Tony", age: 18 });
userRep.add({ name: "Steve", age: 20 });
console.log("user list", userRep.getAll());
