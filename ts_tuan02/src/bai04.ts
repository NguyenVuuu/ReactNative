//Use .then() and .catch() to handle a Promise that returns a random number.
const randomNumber= new Promise<number>((resolve)=>{
    const number = Math.random();
    setTimeout(() => {
        resolve(number)
    }, 1000);
})

randomNumber.then(num=>{
    console.log(num);
    
}).catch(err=>{
    console.log(err);
    
})