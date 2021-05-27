var sandwich = {
    bread: "dutch crunh",
    meat: "tuna",
    cheese: "swiss",
    toppings: [ "lettuce", "tomate", "mustard"]
}

var {bread, meat} = sandwich

bread = "garlic"
meat ="turkey"

//console.log(bread, meat)
//console.log(sandwich.bread, sandwich.meat)

var lordify = regularPerson => {
    console.log(`${regularPerson.firstName} of Canterbury`)
}

var regularPerson = {
    firstName: "Bill",
    lastName: "Wilson"
}

lordify2 = ({firstName}) => {
    console.log(`${firstName} of Canterbury`)
}

//lordify(regularPerson)
//lordify2(regularPerson)

var [firstResort] = [ "Kirkwood", "Squaw", "Alpine"]

//console.log(firstResort)

var [,, thirdResort] = [ "Kirkwood", "Squaw", "Alpine"]
//console.log(thirdResort);  


var name = "Tallac"
var elevation = 9738

var funHike = {name, elevation}

var print = function (){
    console.log(`Mt. ${this.name} is ${this.elevation} feet tall`)

}

var funHike2 = {name, elevation, print}

//console.log(funHike)

//funHike2.print()

var sound = "123"

const skier = {
    name,
    sound,
    powderYell() {
        let yell = this.sound.toUpperCase()
        console.log(`${yell} ${yell} ${yell}!!!`)
    },
    speed(mph) {
        this.speed = mph
        console.log('speed:', mph)
    }
}


skier.powderYell()
skier.speed(200)

