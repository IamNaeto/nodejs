const http = require("node:http")

const server = http.createServer((req, res) => {

    const superHero = [
        {
            firstName: "Bruce",
            lastName: "Wayne",
            specialAbility :  "Power and Speed"
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
    ];

    res.writeHead(200, {"Content-Type":"application/json"})
    res.end(JSON.stringify(superHero))
})

server.listen(3000, () => {
    console.log("Server running at port 3000")
})