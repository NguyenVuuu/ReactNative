"use strict";
//7. Use Promise.race() to return whichever Promise resolves first.
function simulateTask7(taskName, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${taskName} xong trong ${time}ms`);
            resolve(`${taskName} xong trong ${time}ms`);
        }, time);
    });
}
const task4 = simulateTask7("task4", 1000);
const task5 = simulateTask7("task5", 2000);
const task6 = simulateTask7("task6", 1500);
//promise.race để trả về promise nào resolve trước
Promise.race([task4, task5, task6])
    .then((resu) => {
    console.log("resu", resu);
})
    .catch((err) => {
    console.log(err);
});
