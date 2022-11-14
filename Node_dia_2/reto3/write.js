var fs = require("fs/promises")

module.exports= {writeAndRead,...module.exports}

function writeAndRead (archivo,datos) 
 {
    datos.value

    fs.writeFile(archivo,JSON.stringify(datos))
    .then(()=> {return fs.readFile(archivo,"utf-8")})

    .then(data => {console.log(JSON.parse(data))})
    .catch(err => {console.log(err)})

}