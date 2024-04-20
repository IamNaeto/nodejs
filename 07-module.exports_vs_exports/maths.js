//using exports modifies the properties that exist on the export objects
exports.add = (a, b) =>{
    return a + b;
};

exports.subtract = (a, b) =>{
    return a - b;
};

// Using module.exports
const add = (a, b) =>{
    return a + b;
};

const subtract = (a, b) =>{
    return a - b;
};

module.exports = {
    add,
    subtract
};

//Replacing module.exports with just exports won't run or work because from a module, nodejs only returns module.exports and not the exports object. Exports is just a reference to module.exports
exports = {
    add,
    subtract
};