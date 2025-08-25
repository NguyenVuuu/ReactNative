"use strict";
class Account {
    constructor(id, name, initBalance = 0) {
        this.id = id;
        this.name = name;
        this.balance = initBalance;
    }
}
const account1 = new Account(1, "Nguyen Vu", 1000000);
//console.log(account1.id); Property 'id' is private and only accessible within class 'Account'.
console.log(account1.name);
console.log(account1.balance);
account1.name = "Nguyen Vu 2";
// account1.balance = 2000000; Cannot assign to 'balance' because it is a read-only property.
console.log(account1.name);
// tsc
// node dist/bai010.js
