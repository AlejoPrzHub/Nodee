const Professional = require ("./professional")
const rou = require("../routers/professional.routers");
const { request } = require("express");
let pro = []
function getStart(request,response)
{
    let respuesta = {error:true, codigo:200, mensaje:"Punto de inicio"};
    response.send(respuesta);
}

function getProfessional(request, response)
{
    let respuesta;
    console.log(request.query)
    if(request.query.id <= pro.length)
    {
        respuesta = pro[request.query.id]
    }
    else
    respuesta = pro;
    response.send(respuesta)
}

function postProfessional(request, response)
{
    let respuesta = null
    console.log(request.body)
    if(respuesta === null)
    respuesta = new Professional(request.body.nome,request.body.age,request.body.weight,request.body.height,request.body.isRetired,request.body.nationality,request.body.profession),
    message = {error:false,codigo:200,mensaje:"Professional creado con exito",resultado:respuesta},
    pro.push(respuesta)
    else 
    message = {error:true,codigo:200,mensaje:"El metodo fallo",resultado:null}

    response.send(message)
}

function putProfessional(request, response)
{
    console.log(request.body)
    if(request.body.id <= pro.length)
    {
        pro[request.body.id] = new Professional(request.body.nome,request.body.age,request.body.weight,request.body.height,request.body.isRetired,request.body.nationality,request.body.profession)
        // pro[request.body.id].name = request.body.name ? request.body.name:pro[request.body.id].name
        // pro[request.body.id].age =request.body.age?request.body.age:pro[request.body.id].age
        // pro[request.body.id].weight =request.body.weight?request.body.weight:pro[request.body.id].weight
        // pro[request.body.id].height =request.body.height?request.body.height:pro[request.body.id].height
        // pro[request.body.id].isRetired =request.body.isRetired?request.body.isRetired:pro[request.body.id].isRetired
        // pro[request.body.id].nationalyty =request.body.nationality?request.body.nationality:pro[request.body.id].nationality
        // pro[request.body.id].profession =request.body.profession?request.body.profession:pro[request.body.id].profession

        message = {error:false,codigo:200,mensaje:"Professional modificado con exito",resultado:pro[request.body.id]}
    }
    
    else
    message = {error:true,codigo:200,mensaje:"el Professional no existe",resultado: null}
    response.send(message)
}

function delProfessional(request, response)
{
    console.log(request.body)
    if(request.body.id <= pro.length)
    {
        pro.splice(request.body.id)
        respuesta = {error:false,codigo:200,mensaje:"el Professional fue eliminado con exito", resultado:null}
    }
    else 
    respuesta = {error:true,codigo:200,mensaje:"el Professional no existe", resultado:null}

    response.send(respuesta)
}


module.exports = {getStart,delProfessional, putProfessional, getProfessional, postProfessional}
 