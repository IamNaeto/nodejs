// 1. exporting or importing a single variable or function
const add = (a, b) =>{
    return a + b;
};
module.exports = add

// 2. Directly assigning the arrow function to module.exports
module.exports = (a, b) =>{
    return a + b;
};

// 3. Exporting more than one variable or function
const add2 = (a, b) =>{
    return a + b;
};

const subtract = (a, b) =>{
    return a - b;
};

module.exports ={
    add2,
    subtract
}

// 4. Defining the function and directly assigning it to a property on module.exports
module.exports.add3 = (a, b) =>{
    return a + b;
};

module.exports.subtract1 = (a, b) =>{
    return a - b;
};


// 5. Using IIFE that wraps every module in nodejs by replacing module.exports with just exports.
exports.add4 = (a, b) =>{
    return a + b;
};

exports.subtract2 = (a, b) =>{
    return a - b;
};