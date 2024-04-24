const fs = require("node:fs");

console.log("First")

const fileContents = fs.readFileSync("./file.txt")
console.log(fileContents)

const fileContents2 = fs.readFileSync("./file.txt", "utf-8") //Readable format, which is encoding.
console.log(fileContents2)

console.log("Second")

fs.readFile("./file.txt", "utf-8", (error, data) =>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});

console.log("Third")

//Write file method
fs.writeFileSync("./greet.txt", "Learning nodejs is fun!"); //This synchronously create the file greet.txt with the content "Learning nodejs is fun"

fs.writeFile("./greet.txt", "Currently learning fs module object methods", (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("File written")
    }
}) //This asynchronously overwrites the file content and log "File written"

fs.writeFile("./greet.txt", ", both the sync and the async version", {flag: "a"}, (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("File written")
    }
}) //This asynchronously append the text ", both the sync and the async version" to the existing content