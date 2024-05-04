//First Experiment Inference - Synchronous and asynchronous codes
console.log("console.log 1")
process.nextTick(() => console.log("This is process.next 1"))
console.log("console.log 2")


//Second Experiment Inference - Microtask Queues
Promise.resolve().then(() => console.log("This is Promise.resolve 1"))
process.nextTick(() => console.log("This is process.next 1"))


//Third Experiment Inference
process.nextTick(() => console.log("This is process.next 1"))
process.nextTick(() => {
    console.log("This is process.next 2")
    process.nextTick(() => {
        console.log("This is inner next tick inside next tick")
    })
})
process.nextTick(() => console.log("This is process.next 3"))

Promise.resolve().then(() => console.log("This is Promise.resolve 1"))
Promise.resolve().then(() => {
    console.log("This is Promise.resolve 2")
    process.nextTick(() => {
        console.log("This is inner next tick inside promise then block")
    })
})
Promise.resolve().then(() => console.log("This is Promise.resolve 3"))
