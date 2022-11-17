class Professional 
{

constructor(nome,age,weight,height,isRetired,nationality,profession)
{
    this.nome = nome;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.profession = profession;

}
    printAll()
    {
        console.group(Professional)
            console.log("Name - " + this.nome);
            console.log("Age - " + this.age);
            console.log("Weight - " + this.weight);
            console.log("Height - " + this.height);
            console.log("Is Retired? - " + this.isRetired);
            console.log("Nacionality - " + this.nationality);
            console.log("Oscars Numbers - " + this.oscarsNumber);
            console.log("Profession - " + this.profession);
        console.groupEnd(); 
    }
}

async function postProfessional()
{
        try
        {
            
            let nome = document.getElementById("nome");
            let profession = document.getElementById("profession");
            let age = document.getElementById("age");
            let weight = document.getElementById("weight");
            let height = document.getElementById("height");
            let isRetired = document.getElementById("isRetired");
            let nationality = document.getElementById("nationality");

            let profesional = new Professional(nome.value,age.value,weight.value,height.value,isRetired.value,nationality.value,profession.value)

            let url = "http://localhost:3000/Professional";
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                body:JSON.stringify(profesional),
                method:"POST"
            }
            let data = await fetch(url,param);
            let result = await data.json(profesional)
            
            console.log(result)
        }
        catch(error){console.log(error)}
}


async function getProfessional()
{
        try
        {
            let idFront = document.getElementById("id").value
            let query = `id=${idFront}`
            let buscarId = new URLSearchParams(query)

            console.log(typeof idFront)
            //buscarId.set("id",`${idFront}`)

            let url;
            if(idFront !="")
            {
                url = `http://localhost:3000/Professional`
            }
            else(url = `http://localhost:3000/Professional/?${buscarId.set("id",`${idFront}`)}`)
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                method:"GET"
                
            }
            
            let data = await fetch(url,param);
            let result = await data.json()
            let tarjeta = document.getElementById("prof")
            let div = document.createElement("div")
            
            if(result.length <= 1)
                {div.innerHTML =( 
                `<div class="card">
                <p>Name: ${result[idFront].nome}</p>
                <p>Profession: ${result[idFront].profession} </p>
                <p>Age: ${result[idFront].age} </p>
                <p>Weight: ${result[idFront].weight} </p>
                <p>Height: ${result[idFront].height}</p>
                <p>Is Retired?: ${result[idFront].isRetired} </p>
                <p>Nationality: ${result[idFront].nationality}</p>`)
                tarjeta.appendChild(div)}

            else 
                {
                tarjeta.innerHTML = "" 
                for(let i=0;i<result.length;i++)
                {div.innerHTML +=
                (`<div class="card">
                <p>Name: ${result[i].nome}</p>
                <p>Profession: ${result[i].profession} </p>
                <p>Age: ${result[i].age} </p>
                <p>Weight: ${result[i].weight} </p>
                <p>Height: ${result[i].height}</p>
                <p>Is Retired?: ${result[i].isRetired} </p>
                <p>Nationality: ${result[i].nationality}</p>`)
                tarjeta.appendChild(div)}}

                
            
        }
        catch(error){console.log(error)}
}



async function delProfessional()
{
    try
    {
        let id = document.getElementById("id").value
        let url = "http://localhost:3000/Professional";
        let param =
        {
            headers:{"Content-type":"application/json;charset=UTF-8"},
            body:JSON.stringify({"id": id}),
            method:"DELETE"
        }
        //console.log(param)
        let data = await fetch(url,param);
        let result = await data.json()
        //result.splice(id,1)
        
        console.log(result)
    }
    catch(error){console.log(error)}
}

async function putProfessional()
{
        try
        {
            let idFront = document.getElementById("id").value
            let nome = document.getElementById("nome").value;
            let profession = document.getElementById("profession").value;
            let age = document.getElementById("age").value;
            let weight = document.getElementById("weight").value;
            let height = document.getElementById("height").value;
            let isRetired = document.getElementById("isRetired").value;
            let nationality = document.getElementById("nationality").value;
            let nuevo = {nome:nome,age:age,weight:weight,height:height,isRetired:isRetired,nationality:nationality,profession:profession,id:idFront}
            let url = "http://localhost:3000/Professional";
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                body:JSON.stringify(nuevo),
                method:"PUT"
            }
            let data = await fetch(url,param);
            let result = await data.json()
            
            console.log(result)
        }
        catch(error){console.log(error)}
}