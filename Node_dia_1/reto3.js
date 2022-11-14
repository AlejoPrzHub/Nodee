var readline = require("readline");
var fs = require("fs");
var rl = readline.createInterface(process.stdin, process.stdout);

let datos = {
    "name":"",
    "surname":"",
    "age":""
};

rl.question("Cual es tu nombre?", (respuesta) => { datos.name = respuesta;
    rl.question("Cual es tu apellido?", (respuesta1) => {datos.surname = respuesta1;
        rl.question("Cual es tu edad?", (respuesta2) => {datos.age = respuesta2;
            let jsonData = JSON.stringify(datos);
                    fs.writeFile(`data1.json`,jsonData,(error)=>{if (error){console.log("Error: ${error}")}})
                    fs.readFile(`data1.json`,`utf-8`,(error,data) => {if(!error){console.log(data)} else{console.log("Error: ${error}")}});
});
})});

