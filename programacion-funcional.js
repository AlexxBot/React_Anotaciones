var log = function(message){
    console.log(message)
}
//log("In Javascript functions area varibales")

const log2 = message => console.log(message)

//log2("In Javascript functions area varibales")

//el concepto es que las fanciones tambien son variables

const obj = {
    message: "they can be added to objexts like variables",
    log(message){
        console.log(message)
    }
}

//obj.log(obj.message)

const messages = [
    "they can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
]

//messages[1](messages[0])
//messages[3](messages[2])

//const insideFn = logger => logger("They can be sent to other functions as arguments")

const insideFn = function(logger){
    //console.log(typeof logger)
    return logger("They can be sent to other functions as arguments")
}

insideFn(m =>  console.log(m))

//insideFn(function hola(message){ console.log(message)})


/* var createScream = function(logger) {
    return function(message) {
        logger(message.toUpperCase() + "!!!")
    }
} */

const createScream = logger => message => logger(message.toUpperCase() + "!!!")

const scream = createScream(message => console.log(message))

scream('function can be returned from other functions')
scream('createScream returns a function')
scream('scream invokes that returned function')

/* function suma(a){
    return function(b){
        return a + b;
    }
} */

const suma = a => b => a + b 

console.log(suma(3)(5))