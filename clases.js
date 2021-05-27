// este version es soportado desde ES6

class Vacation{
    constructor(destination, length) {
        this.destination = destination
        this.length = length
    }

    print(){
        console.log(`${this.destination} will take ${this.length} days.`)
    }
}


class Expedition extends Vacation {
    constructor( destination, length, gear) {
        super(destination, length)
        this.gear = gear
    }

    print(){
        super.print()
        console.log(`Bring your ${this.gear.join("and your ")}`)
    }
}

const trip = new Vacation("Santiago, Chile", 7)
trip.print()

const trip2 = new Expedition("Mt. Whitney", 3, ["sunglasse", "prayer flags", "camera"])

trip2.print()


//falta agregar getter setters, abstract, interface, static methods,


module.export = {
    Expedition: Expedition
}