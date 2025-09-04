"use strict";
// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
function simulateTask6(taskName, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${taskName} xong trong ${time}ms`);
            resolve(`${taskName} xong trong ${time}ms`);
        }, time);
    });
}
const task1 = simulateTask6("Task 1", 1000);
const task2 = simulateTask6("Task 2", 2000);
const task3 = simulateTask6("Task 3", 1500);
//Promise.all dùng để chạy song song các tác vụ
Promise.all([task1, task2, task3])
    .then((resu) => {
    console.log("xong cac task");
    console.log(resu);
})
    .catch((err) => {
    console.log(err);
});
