const { resolve } = require("path")
const readline = require("readline")
const fs = require("fs");

let datos = {
    "name":"",
    "surname":"",
    "age":""
};

function pregunta(pregunta)
{
    const question = new Promise((resolve,reject) =>
    {
        const rl = readline.createInterface(
            {
                input:process.stdin,
                output:process.stdout
            });
            rl.question(pregunta,(respuesta) => {resolve(datos.name = respuesta),
            rl.close()
            }
    )})
    return question
    }

    pregunta("cual es tu nombre?")