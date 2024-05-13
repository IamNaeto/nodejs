const http = require("http");
const { Worker } = require("node:worker_threads") //Importing the worker_threads module and destructuring the worker constructor

const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.writeHead(200, {"Content-Type":"text/plain"});
        res.end("Home Page");
    } else if (req.url === "/slow-page") {
        const worker = new Worker("./worker-thread.js"); //new worker thread using the worker function with the path to a worker file passed as an argument
        worker.on("message", (j) => {
            res.writeHead(200, {"Content-Type":"text/plain"});
            res.end(`Slow Page ${j}`);
        })
    }
});

server.listen(8000, () => console.log("Server is running on port 8000"));