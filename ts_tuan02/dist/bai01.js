"use strict";
// Create a Promise that returns the string "Hello Async" after 2 seconds.
function HelloAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}
HelloAsync().then((msg) => {
    console.log(msg);
});
