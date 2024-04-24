const fs = require("node:fs")

const readableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 2, // Sets the data in chunks of 2 bits but by default its set to 64kb
}); // This read data in chunks from ./file.txt

const writeableStream = fs.createWriteStream("./file2.txt"); // This write data in chunks to ./file2.txt

//Streams extends from the event emitter class which allows us to add listeners to events, so the readableStream emits a data event to which we can listen
readableStream.on("data", (chunk) =>{
    console.log(chunk)
    writeableStream.write(chunk) // This writes to ./file2.txt
});