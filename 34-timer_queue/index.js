//Third Experiment Inference

setTimeout(() => {
    console.log("This is setTimeout 1")
}, 0);
setTimeout(() => {
    console.log("This is setTimeout 2")
}, 0);
setTimeout(() => {
    console.log("This is setTimeout 3")
}, 0);


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


//Fourth Experiment Inference

setTimeout(() => {
    console.log("This is setTimeout 1")
}, 0);
setTimeout(() => {
    console.log("This is setTimeout 2")
    process.nextTick(() => {
        console.log("This is inner next tick inside setTimeout")
    })
}, 0);
setTimeout(() => {
    console.log("This is setTimeout 3")
}, 0);


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


//Fifth Experiment Inference
setTimeout(() => {
    console.log("This is setTimeout 1")
}, 1000);
setTimeout(() => {
    console.log("This is setTimeout 2")
}, 500);
setTimeout(() => {
    console.log("This is setTimeout 3")
}, 0);