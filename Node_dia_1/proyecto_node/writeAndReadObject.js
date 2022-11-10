var fs = require("fs")
module.exports= {writeAndRead,...module.exports}

function writeAndRead (archivo,datos) 
 {
    datos.value

let jsonData = JSON.stringify(datos);

fs.writeFile(archivo,jsonData,(error)=>{if (error){console.log("Error: ${error}")}})

fs.readFile(archivo,`utf-8`,(error,data) => {if(!error){console.log(data)} else{console.log("Error: ${error}")}})}


// writeAndRead("mifichero.json","{"calle":"madrid","numero":6}");
