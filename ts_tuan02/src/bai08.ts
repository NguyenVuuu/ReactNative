//Create a Promise chain: square the number 2, then double it, then add 5.

Promise.resolve(2)
  .then((num) => {
    const square = num * num;
    console.log("binh phuong: ", square);
    return square;
  })
  .then((num) => {
    const double = num * 2;
    console.log("nhan 2: ", double);
    return double;
  })
  .then((num) => {
    const add = num + 5;
    console.log("cong 5: ", add);
    return add;
  });
