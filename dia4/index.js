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

let pro = [];


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
            let result = await data.json()
            
            pro.push(profesional)
            console.log(pro)
            console.log(result)
        }
        catch(error){console.log(error)}
}


async function getProfessional()
{
        try
        {
            let id = document.getElementById("id").value
            let url = "http://localhost:3000/Professional";
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                method:"GET"
            }
            let data = await fetch(url,param);
            let result = await data.json()
            
            if(id <= pro.length)
            {
                document.getElementById("prof").innerHTML = 
                `<div class="card">
                <p>Name: ${pro[id].nome}</p>
                <p>Profession: ${pro[id].profession} </p>
                <p>Age: ${pro[id].age} </p>
                <p>Weight: ${pro[id].weight} </p>
                <p>Height: ${pro[id].height}</p>
                <p>Is Retired?: ${pro[id].isRetired} </p>
                <p>Nationality: ${pro[id].nationality}</p>`
            }
            else if(id === "")
            {
                for(let i=0;i<pro.length;i++)
                {document.getElementById("prof").innerHTML += 
                `<div class="card">
                <p>Name: ${pro[i].nome}</p>
                <p>Profession: ${pro[i].profession} </p>
                <p>Age: ${pro[i].age} </p>
                <p>Weight: ${pro[i].weight} </p>
                <p>Height: ${pro[i].height}</p>
                <p>Is Retired?: ${pro[i].isRetired} </p>
                <p>Nationality: ${pro[i].nationality}</p>`}
            }
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
            body:JSON.stringify(id),
            method:"DEL"
        }
        let data = await fetch(url,param);
        let result = await data.json()
        pro.splice(id)
        
    }
    catch(error){console.log(error)}
}

async function putProfessional()
{
        try
        {
            let id = document.getElementById("id").value
            let nome = document.getElementById("nome");
            let profession = document.getElementById("profession");
            let age = document.getElementById("age");
            let weight = document.getElementById("weight");
            let height = document.getElementById("height");
            let isRetired = document.getElementById("isRetired");
            let nationality = document.getElementById("nationality");

            pro[id] = new Professional(nome.value,age.value,weight.value,height.value,isRetired.value,nationality.value,profession.value)

            let url = "http://localhost:3000/Professional";
            let param =
            {
                headers:{"Content-type":"application/json;charset=UTF-8"},
                body:JSON.stringify(pro[id]),
                method:"PUT"
            }
            let data = await fetch(url,param);
            let result = await data.json()
            
            
            //console.log(pro[id])
            console.log(result)
        }
        catch(error){console.log(error)}
}