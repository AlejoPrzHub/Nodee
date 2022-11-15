
const Professional = require ("./professional")


let carpintero = new Professional("juan",25,40,80,"no","colombia","carpinteria")
let plomero = new Professional("Pedro",50,50,60,"no","cuba","plomeria")

let professionales = [carpintero,plomero]

function getProfessional(request, response)
{
    response.send(carpintero)
}

function postProfessional(request, response)
{
    let respuesta = "";
    if(respuesta != null)
    respuesta = new Professional("Pepito",50,50,60,"no","ecuador","carpinteria")
    else 
    respuesta = {error:true,codigo:200,mensaje:"El metodo fallo"}

    response.send(respuesta)
}

function putProfessional(request, response)
{
    if(carpintero != null)
    {
    carpintero.age = 100,
    carpintero.isRetired = "si"
    carpintero.name = "kambio"
    carpintero.nationality = "venezuela"

    respuesta = {error:false, codigo:200, mensaje:"usuario actualizado", resultado:carpintero}
    }
    else
    respuesta = {error:true,codigo:200,mensaje:"el usuario no existe",resultado: carpintero}
    response.send(respuesta)
}

function delProfessional(request, response)
{
    let respuesta;
    if(carpintero != null)
    {
    carpintero = null;
    respuesta = {error:false,codigo:200,mensaje:"Professional borrado con exito"}
    }
    else 
    respuesta = {error:true,codigo:200,mensaje:"el usuario no existe", resultado:carpintero}

    response.send(respuesta)
}


module.export = {delProfessional, putProfessional, getProfessional, postProfessional}
 