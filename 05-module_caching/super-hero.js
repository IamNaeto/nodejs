class SuperHero{
    constructor(name){
        this.name = name
    }

    getName(){
        return this.name
    }

    setName(name){
        this.name = name;
    }
}

// module.exports = new SuperHero("Batman")

/*
*Seneriors where we need to create seperate instances of SuperHero (class)
- Instead of exporting an instance that will be imported, we export the class itself
 */
module.exports = SuperHero