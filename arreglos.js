//spreed operator (...)


var peaks = ["Tallac", "Ralston", "Rose"]
var canyons = ["Ward", "Blackwood"]
var tahow = [...peaks, ...canyons]

console.log(tahow.join(', '))

//var [last] = peaks.reverse()


//console.log(peaks.join(" ,"))
//console.log(last)

var [last] = [...peaks].reverse();
//console.log(last)
//console.log(peaks)

var lakes = ["Donner", "Marlette", "Fallen leaf","Cascade"]

var [first, ...rest] = lakes;

//console.log(rest.join(', '))

function directions(...args){
    var [start, ...remaining] = args
    var [finish, ...stops] = remaining.reverse()

    console.log(`drive through ${args.length} towns`)
    console.log(`start in ${start}`)
    console.log(`the destination is ${finish}`)
    console.log(`stopping ${stops.length} times in between`)
}

//directions("Truckee", "Tahoe City", "SunnySide", "Homewood", "Tahoma")

var morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
}

var dinner = "mac and cheese"

var backpackingMeals = {
    ...morning,
    dinner
}

console.log(backpackingMeals)