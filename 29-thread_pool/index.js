const crypto = require("node:crypto");
//Crypto module provides crypto graphic functionality, and similar to the fs module it does use Libuv thread pool for some of its methods.
//One of the specific method from the crypto module is pbkdf2, this stands for password based key derivation function 2 and is one of the popular methods to harsh passwords before storing them

const start = Date.now(); 
crypto.pbkdf2Sync = ("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync = ("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync = ("password", "salt", 100000, 512, "sha512");
console.log("Hash: ", Date.now() - start)


const MAX_CALLS = 3

const startTime = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
        console.log(`Hash: ${i + 1}`, Date.now() - startTime);
    });
}