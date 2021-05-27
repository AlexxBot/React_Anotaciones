//var and const
var pizza = true
pizza = false
//console.log(pizza)


const pizza2 = true
//pizza2 = false
//console.log(pizza2)

//let

var topic = 'Javascript'

if(topic) {
    var topic = 'React'
    console.log('bloc', topic)
}
console.log('global', topic)

var topic2 = "Javascript"
if(topic2){
    let topic2 = "React"
    console.log('block', topic2)
}
console.log('global', topic2)

//Strings
var lastName = "Ttito"
var firstName = "Alex"
var middleName = "AlexxBot"
console.log(lastName + ", "+ firstName + " " + middleName)
console.log(`${lastName} , 
${firstName}  ${middleName}`)



