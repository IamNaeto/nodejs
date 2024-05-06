const upperCase = require("upper-case").upperCase //CommonJs mode of import

function greet(name){
    console.log(upperCase(`Hello ${name}, welcome to package.json`))
}

greet("Charles")
module.exports = greet