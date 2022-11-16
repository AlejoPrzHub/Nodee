
function consultarPokemon()
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${document.getElementById("Pokemon").value}`)
    .then(function(response){
        response.json()
        .then(function(pokemon)
        {
            document.getElementById("Nombre").innerHTML = 
            `<h2>${pokemon.name}</h2>`
            
            
            document.getElementById("Imagen").innerHTML = 
            `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${document.getElementById("Pokemon").value}.svg">`
            



            
           // console.log(pokemon.abilities)
            
        })
    })
}


