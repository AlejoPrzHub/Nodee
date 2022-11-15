class Professional 
{
    name;
    age;
    weight;
    height;
    isRetired;
    nationality;
    profession;

constructor(name,age,weight,height,isRetired,nacionality,profession)
{
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nacionality;

    this.profession = profession;

}
    printAll()
    {
        console.group(Professional)
            console.log("Name - " + this.name);
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