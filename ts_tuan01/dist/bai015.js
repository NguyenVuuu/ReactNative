"use strict";
//Create a Library class that can store Book and User objects. Add method to add books.
class Book15 {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
class User15 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Book ${book.title} price ${book.price} add thanh cong`);
    }
    addUser(user) {
        this.users.push(user);
        console.log(`User ${user.name} age ${user.age} add thanh cong`);
    }
    listBooks() {
        console.log("List books:");
        this.books.forEach((book) => {
            console.log(`Book ${book.title} price ${book.price}`);
        });
    }
    listUsers() {
        console.log("List users:");
        this.users.forEach((user) => {
            console.log(`User ${user.name} age ${user.age}`);
        });
    }
}
const library = new Library();
const book15 = new Book15("Harry Potter and the Deathly Hallows", 100);
const book151 = new Book15("Harry Potter and the Prisoner of Azkaban", 200);
const book152 = new Book15("Harry Potter and the Order of the Phoenix", 300);
library.addBook(book15);
library.addBook(book151);
library.addBook(book152);
const user15 = new User15("John", 20);
library.addUser(user15);
library.listBooks();
library.listUsers();
