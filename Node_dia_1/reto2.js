var fs = require("fs")

let datos = {
    "name":"Jose",
    "surname":"Perez",
    "age":"27"
};

let jsonData = JSON.stringify(datos);

fs.writeFile(`data1.json`,jsonData,(error)=>{if (error){console.log("Error: ${error}")}})

fs.readFile(`data1.json`,`utf-8`,(error,data) => {if(!error){console.log(data)} else{console.log("Error: ${error}")}})