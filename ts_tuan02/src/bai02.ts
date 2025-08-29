//Write a function that returns a Promise resolving with the number 10 after 1 second.
function numberTen(): Promise<number>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(10)
        },1000)
    })
}

numberTen().then(msg=>{
    console.log(msg);
    
})