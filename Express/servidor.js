//RETO 1 NODE DIA 3


import express, { application, json } from "express";
const app = express();

app.get("/", function (request,response)
    {
        console.log("Peticion recibida del cliente");
        console.log(request.url);
        console.log(request.method);
        console.log(request.headers["user-agent"]);
        
        response.status(200).json
                            ({
                               ok:true,message:"Recibido!"
                            })
    });

app.get("/bye", function (request,response)
    {
        console.log("Peticion recibida del cliente");
        console.log(request.url);
        console.log(request.method);
        console.log(request.headers["user-agent"]);
        
        response.status(200).json
                            (
                                {ok:true,message:"Adios!"}
                            )
    });

app.listen(4000);