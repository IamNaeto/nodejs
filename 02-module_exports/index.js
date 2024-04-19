const addFunction = require("./add") //The require function returns for the corresponding module

console.log("Hello from index.js in module exports folder")

const sum = addFunction(2, 2)
const sum2 = addFunction(56, 45)
console.log(sum)
console.log(sum2)