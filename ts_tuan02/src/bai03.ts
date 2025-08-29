//Write a function that rejects a Promise with the error "Something went wrong" after 1 second
function rejectsPromise(): Promise<never>{
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>rejects(new Error('Something went wrong asdasdasd')),1000)
    });
};

async function reject() {
    try{
        await rejectsPromise();
    }catch(error){
        console.error('error: ',(error as Error).message);
        
    };
    
};
reject();