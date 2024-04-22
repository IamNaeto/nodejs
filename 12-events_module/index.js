const EventEmitter =  require("node:events")
/** 
*   The constant is EventEmitter and not Event because the events module returns a class called event emitter which 
*   encapsulate functionality to emit events and respond to events.  Hence EventEmitter is the most appropriate constant 
*   name to use
**/

const emitter = new EventEmitter()
/** 
 * Using this emitter object, 
 * We can emit events using the emit method
 * To register a listener, we use the on method which accepts two parameters; the first parameter is the event name, while the second parameter is the listener. A listener is a call back function that get executed when the corresponding event is emitted
**/

emitter.on("order-pizza", () =>{
    console.log("Order received! Baking a pizza")
});

emitter.emit("order-pizza");

/**
* When emitting an event sometimes you may want to pass data to the listener. 
* This can be done by specifying the argument after the event name while emitting the event and accepting the argument in the listener which is the second paraemeter of the on method
* Multiple listeners can also be registered for the same event
**/ 

emitter.on("order-pizza", (size, topping) =>{
    console.log(`Order received! Baking a ${size} pizza with ${topping}`)
});

emitter.on("order-pizza", (size) =>{
    if (size === "large"){
        console.log("Serving complimentary drink")
    }else(
        console.log("No complimentary drink")
    )
})
console.log("Do work before event occurs in the system") //This logs first because there is no execution blocking in events module
emitter.emit("order-pizza", "large", "mushroom");