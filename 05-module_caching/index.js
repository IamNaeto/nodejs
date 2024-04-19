// const superHero = require("./super-hero")
// console.log(superHero.getName());
// superHero.setName("Spiderman")
// console.log(superHero.getName())

// const newSuperHero = require("./super-hero") //new instance
// console.log(newSuperHero.getName())


/*
*Seneriors where we need to create seperate instances of SuperHero
 */
const SuperHero = require("./super-hero")

const batman = new SuperHero("Batman")
console.log(batman.getName())
batman.setName("Klaus")
console.log(batman.getName())

const superman = new SuperHero("Superman") //new instance
console.log(superman.getName())