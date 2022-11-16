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

module.exports = Professional;