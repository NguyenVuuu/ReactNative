"use strict";
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
const user1 = new User("Nguyen Vu");
console.log("name user1:", user1.name);
const user2 = new User("Van B");
console.log("name user2:", user2.name);
const user3 = new User("Thi C");
console.log("name user3:", user3.name);
