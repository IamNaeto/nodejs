const add = require("./maths")

console.log(add(12, 45))

const maths = require("./maths")
console.log(maths.add2(56, 85))
console.log(maths.subtract(895, 523))

//Destructuring the object after requiring the module
const {add2, subtract} = maths
console.log(add2(23, 46))
console.log(subtract(65, 3))

console.log(maths.add3(56, 2))
console.log(maths.subtract1(68, 23))

console.log(maths.add4(52, 1))
console.log(maths.subtract2(20, 10))