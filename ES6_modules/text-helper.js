const imprimir = (message) => log(message, new Date())

const logg = (message, timestamp) => console.log(`${timestamp}: ${message}`)

/* function imprimir(message){
    log(message, new Date())
}

function log(message, timestamp){
    console.log(`${timestamp}: ${message}`)
} */


//print("vvsdfsdf")
//log("sdfdsfd", "sdfsdf")
module.export = {
    imprimir,
    logg
}