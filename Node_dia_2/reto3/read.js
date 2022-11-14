const { resolve } = require("path")
const readline = require("readline")
var fs = require("fs/promises")
module.exports= {readConsole,...module.exports}

let datos = {
    "name":"",
    "surname":"",
    "age":""
};

function readConsole(callback) { 
function pregunta(pregunta)
{
    
    const question = new Promise((resolve,reject) =>
    {
        const rl = readline.createInterface(
            {
                input:process.stdin,
                output:process.stdout
            });

            rl.question(pregunta,(respuesta) => {resolve(respuesta);
            rl.close()
            }
            
    )})
    return question
    }
    pregunta("cual es tu nombre?")
    .then((respuesta)=>{
        datos.name = respuesta

        return pregunta("cuales es tu apellido?")
    })

    .then((respuesta)=>{
        datos.surname = respuesta

        return pregunta("cual es tu edad?")
    })

    .then((respuesta)=>{
        datos.age = respuesta

        fs.writeFile("data1.json", JSON.stringify(datos))
        .then(() => {return fs.readFile("data1.json", "utf8")})
    })
    fs.writeFile("data1.json", JSON.stringify(datos))
    .then(() => {return fs.readFile("data1.json", "utf8")})
    .catch(err => {console.log(err)});
}

    