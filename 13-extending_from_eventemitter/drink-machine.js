class DrinkMachine{
    serveDrink(size){
        if (size === "large"){
            console.log("Serving complimentary drink");
        }else(
            console.log("No complimentary drink")
        )
    }
}

module.exports = DrinkMachine;