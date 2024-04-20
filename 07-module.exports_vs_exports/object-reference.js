const obj1 = {
    name: "Bruce Wayne",
};

const obj2 = obj1

obj2.name = "Clark Kent";
console.log(obj1) //{name : 'Clark Kent'}
/*
    In Javascript when you assign one object to another,  both object points to the same address in memory, so modifying one will lead to modifying the other.
 */



/*
    After the initial assignment, if we assign a new object instead of modifying the properties on the existing object, that reference is broken
 */
let obj3 = obj1
obj3 = {
    name: "Clark Kent"
}
console.log(obj1) //Comment the modication above will give the output as {name : 'Bruce Wayne'}

/*
From the examples above
- Obj1 is module.exports and 
- Obj3 is just exports
 */