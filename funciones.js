function logActivity(name = "ShaneMcConkey", activity= "skiing"){
    console.log(`${name} loves ${activity}`)
}

//logActivity()
//logActivity("Alex", "musica")

var defaultPerson = {
    name: {
        first: "Shane",
        last: "McConkey"
    },
    favActivity: "skiing"
}

function logActivity2(p = defaultPerson){
    console.log(`${p.name.first} loves ${p.favActivity}`)
}

//logActivity2()

// arrow function 
var lordify = function(firstName) {
    return `${firstName} of Canterbury`
}

var lordify2 = firstName => `${firstName} of Canterbury 2`
var lordify3 = (firstName, land) =>`${firstName} of ${land}`


var lordify4 = function(firstName, land) {
    if(!firstName){
        throw new Error('A first name is required')
    }
    if(!land){
        throw new Error('A lord must have a land')
    }

    return `${firstName} of ${land}`
}

var lordify5 = (firstName, land) =>{
    if(!firstName){
        throw new Error('A first name is required')
    }
    if(!land){
        throw new Error('A lord must have a land')
    }

    return `${firstName} of ${land}`
}
//console.log(lordify("Alex"))
//console.log(lordify2("alexxbot"))
//console.log(lordify3("jose", "cusco"))

/* var tahoe = {
    resorts: ["kirkwood", "Squaw", "Alpine", "Heavenly", "NorthStart"],
    print: function(delay= 1000){
        setTimeout(function(){
            console.log(this.resorts.join(","))
        }, delay)
    }
} */

var tahoe = {
    resorts: ["kirkwood", "Squaw", "Alpine", "Heavenly", "NorthStart"],
    print: function(delay= 1000){
        setTimeout(() => {
            console.log(this.resorts.join(","))
        }, delay)
    }
}

tahoe.print()