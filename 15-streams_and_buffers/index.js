const buffer = new Buffer.from("Vishwas")

console.log(buffer.toString())
console.log(buffer)
console.log(buffer.toJSON()) 

buffer.write("Code") //This over writes the four characters in "Vishwas"
console.log(buffer.toString())