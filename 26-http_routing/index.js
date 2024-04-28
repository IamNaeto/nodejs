const http = require("node:http")
const fs = require("node:fs");
const { stringify } = require("node:querystring");

const server = http.createServer((req, res) => {
    /*
    *   res.end(req.url) //Gives us the credit string
    */

    /* 
    *   req.method also gives us access to the http methods such as GET, POST, PUT and DELETE which we can once again use to route diffrent request
    *   A combination of req.url and req.method can help in handling any type of routing with the http module
    *   In the real world app, we typically rely on a web framework to handle all of these.
    */

    if(req.url === "/") {
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end("Welcome To Home Page");
    } else if(req.url === "/about") {
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end("Wecome To About Page");
    } else if(req.url === "/api"){
        res.writeHead(200, {"Content-Type" : "application/json"});
        res.end(JSON.stringify([
            {
                firstName: "Bruce",
                lastName: "Wayne",
                specialAbility :  "Superpower and Speed"
            },
            {
                firstName: "Charles",
                lastName: "Egesionu",
                specialAbility :  "Software Engineer"
            },
            {
                firstName: "Klaus",
                lastName: "Mikaelson",
                specialAbility :  "Original Hybrid Vampire"
            },
            {
                firstName: "Hope",
                lastName: "Mikaelson",
                specialAbility :  "Tribrid: Witch, Werewolf, Vampire"
            }
        ]))
    }else{
        res.writeHead(404, {"Content-Type" : "text/plain"});
        res.end("Page Not Found")
    }
})
server.listen(3000, () =>{
    console.log("Server running at port 3000")
})