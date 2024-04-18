(function(exports, require, module, __filename, __direname){
    const superHero = "Batman";
    console.log(superHero);
})

/*** Before a modules code is executed, nodejs wraps it with a function that conatins five parameters namely"
* exports
* require
* module
* __filename (double underscore filename)
* __direname (double underscore dirname)
****/

// They are available for use in every module