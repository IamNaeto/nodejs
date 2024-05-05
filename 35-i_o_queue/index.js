const fs = require("node:fs")

//Sixth Experiment Inference
fs.readFile(__filename, () => {
    console.log("This is readFile 1")
})

process.nextTick(() => console.log("This is process.nexTick 1"))
Promise.resolve().then(() => console.log("This is Promise.resolve 1"))



//Seven Experiment Inference
setTimeout(() => console.log("This is setTimeout 1"), 0)

fs.readFile(__filename, () => {
    console.log("This is readFile 1")
})



//Eight Experiment Inference
fs.readFile(__filename, () => {
    console.log("This is readFile 1")
})

process.nextTick(() => console.log("This is process.nexTick 1"))
Promise.resolve().then(() => console.log("This is Promise.resolve 1"))
setTimeout(() => console.log("This is setTimeout 1"), 0)

for(let i = 0; i < 2000000000; i++){}