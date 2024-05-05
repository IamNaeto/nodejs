const fs = require("node:fs")

//Tenth Experiment Inference
fs.readFile(__filename, () => {
    console.log("This is readFile 1")
    setImmediate(() => console.log("This is setImmediate inside readFile"))
})

process.nextTick(() => console.log("This is process.nexTick 1"))
Promise.resolve().then(() => console.log("This is Promise.resolve 1"))
setTimeout(() => console.log("This is setTimeout 1"), 0)

for(let i = 0; i < 2000000000; i++){}



//Eleventh Experiment Inference
fs.readFile(__filename, () => {
    console.log("This is readFile 1")
    setImmediate(() => console.log("This is setImmediate inside readFile"))
    process.nextTick(() => 
        console.log("This is process.nexTick inside readFile")
    )
    Promise.resolve().then(() => 
        console.log("This is Promise.resolve inside readFile")
    )
})

process.nextTick(() => console.log("This is process.nexTick 1"))
Promise.resolve().then(() => console.log("This is Promise.resolve 1"))
setTimeout(() => console.log("This is setTimeout 1"), 0)

for(let i = 0; i < 2000000000; i++){}

//Twelfth Experiment Inference
setImmediate(() => console.log("This is setImmediate 1"))
setImmediate(() => 
    {console.log("This is setImmediate 2")
    process.nextTick(() => console.log("This is process.nexTick 1"))
    Promise.resolve().then(() => console.log("This is Promise.resolve 1"))
})
setImmediate(() => console.log("This is setImmediate 3"))

//Thirteenth Experiment Inference
setTimeout(() => console.log("This is setTimeout 1"), 0)
setImmediate(() => console.log("This is setImmediate 1"))
for(let i = 0; i < 2000000000; i++){}