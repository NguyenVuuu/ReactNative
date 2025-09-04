"use strict";
//9. Write a Promise that reads an array after 1 second and filters even numbers.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(arr.filter((num) => num % 2 === 0));
    }, 1000);
});
promise.then((result) => {
    console.log(result);
});
