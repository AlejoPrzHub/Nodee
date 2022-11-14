var fs = require("fs/promises")

let datos = {
    "name":"Jose",
    "surname":"Perez",
    "age":"27"
};

fs.writeFile("data1.json", JSON.stringify(datos))
.then(() => {return fs.readFile("data1.json", "utf8")})

.then(data => {console.log(JSON.parse(data))})

.catch(err => {console.log(err)});



