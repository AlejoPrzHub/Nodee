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
            rl.question(pregunta,(respuesta) => {resolve(respuesta),
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

        return console.log(datos);
    })

    
