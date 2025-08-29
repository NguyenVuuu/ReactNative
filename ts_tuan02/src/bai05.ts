//Create a function simulateTask(time) that returns a Promise resolving with "Taskdone" after time ms.
const simulateTask = new Promise<number>((resolve)=>{
    
})
const simulateTask1=(time:number): Promise<string>=>{
    return new Promise((_,resolve)=>{
       setTimeout(()=> resolve("Task Done " ) , time) ;  
    }); 

}

async function test () {
    try {
         console.log("Run task");
        const result = await simulateTask1(1500);
     return console.log(result);
     
         
       
    } catch (error) {
        console.log(error);
        
    }
}

test();