const { resolve } = require("path")
const readline = require("readline")
const fs = require("fs");
module.exports= {readConsole,...module.exports}



function readConsole(callback) { 
function pregunta(pregunta)
{
    let datos = {"name":""}
    
    const question = new Promise((resolve,reject) =>
    {
        const rl = readline.createInterface(
            {
                input:process.stdin,
                output:process.stdout
            });

            rl.question(pregunta,(respuesta) => {resolve(datos.name = respuesta);
            rl.close()
            }
            
    )})
    let jsonData = JSON.stringify(datos)
    callback = console.log(jsonData);
    return question
    }
    pregunta("cual es tu nombre?")
}

    