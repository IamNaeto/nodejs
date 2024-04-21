const path = require("path");

console.log(__filename) // Outputs a string that represents the full part to the file 
console.log(__dirname)  // Outputs a string that represents the full part to the folder where the file is located

console.log(path.basename(__filename)) // Returns the last portion of the filename
console.log(path.basename(__dirname)) // Returns the last portion of the directory name

console.log(path.extname(__filename)) // Returns the extension of the filename
console.log(path.extname(__dirname)) // Returns the extension of the directory name

console.log(path.parse(__filename)) // Returns  an object whose property represents significant elements of the filename
console.log(path.parse(__dirname)) // Returns  an object whose property represents significant elements of the directory name

console.log(path.format(path.parse(__filename))) // Returns a path string, given an object
console.log(path.format(path.parse(__dirname))) // Returns a path string, given an object

console.log(path.isAbsolute(__filename)) //  Returns whether a path is absolute or not
console.log(path.isAbsolute(__dirname)) //  Returns whether a path is absolute or not
console.log(path.isAbsolute("./data.json")) //  Returns whether a path is absolute or not

console.log(path.join("folder1", "folder2", "index.html")) // Joins all given path segments together using the platfrom specific seperator as a delimator
console.log(path.join("/folder1", "folder2", "index.html")) // Joins all given path segments together using the platfrom specific seperator as a delimator
console.log(path.join("/folder1", "//folder2", "index.html")) //It also normalizes the resulting path
console.log(path.join("/folder1", "//folder2", "../index.html")) // This means from folder 2 jump one folder up and concantenate index.html. So the output wil be \folder1\index.html
console.log(path.join(__dirname, "data.json")) // Gives full absolute path to data.json

console.log(path.resolve("folder1", "folder2", "index.html")) // Resolves sequence of paths or paths segments into an absolute path. If there is not forward slash at the begining of the argument, resolve will add and absolute path to the current folder and join the argument. Hence the path will start with /Users Output: \Users\Admin\Documents\Workflow\nodejs\10-path_module\folder1\folder2\index.html
console.log(path.resolve("/folder1", "folder2", "index.html")) // If forward slash is specified, resolve will return the absolute path from that forward slash. Output : \folder1\folder2\index.html
console.log(path.resolve("/folder1", "//folder2", "index.html")) // if forward slash occurs later in the sequence, resolve will consider that as the root and will ignore the previous path. Output : \folder2\index.html
console.log(path.resolve("/folder1", "//folder2", "../index.html")) //Same way, double forward slash is treated as root and ../ goes one up folder and hence the output : \index.html
console.log(path.resolve(__dirname, "data.json")) // Since __dirname is already an absolute path, we see that with data.json returned by the resolve method.
