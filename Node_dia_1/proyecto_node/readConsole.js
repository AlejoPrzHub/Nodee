var readline = require("readline");
var fs = require("fs");
var rl = readline.createInterface(process.stdin, process.stdout);
module.exports= {readConsole,...module.exports}


function readConsole(callback){

let datos = {
    "name":"",
    "surname":"",
    "age":""
};

rl.question("Cual es tu nombre? ", (respuesta) => { datos.name = respuesta;
    rl.question("Cual es tu apellido? ", (respuesta1) => {datos.surname = respuesta1;
        rl.question("Cual es tu edad? ", (respuesta2) => {datos.age = respuesta2;
            let jsonData = JSON.stringify(datos);
                   callback = console.log(jsonData);
});
})})
}

// readConsole(console.log());