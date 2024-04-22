function greet(name){
    console.log(`Hello ${name}`);
}

function greetCharles(greetFn){
    const name =  "Charles";
    greetFn(name);
}

greetCharles(greet)

// Those above can be re-written thus
function greet(name){
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback){
    const name =  "Charles";
    callback(name);
}

higherOrderFunction(greet)