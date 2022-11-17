
function consultarPokemon()
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${document.getElementById("Pokemon").value}`)
    .then(function(response){
        response.json()
        .then(function(pokemon)
        
        {   
            //imagen
            document.getElementById("Imagen").innerHTML = 
            `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${document.getElementById("Pokemon").value}.svg">`
            

            // `<img src="${pokemon.sprites.other.dream_world.front_default}"`

            // console.log(pokemon.sprites.other.dream_world.front_default);
            //console.log(pokemon.sprites.other.dream_world.front_default);

            //nombre
            document.getElementById("Nombre").innerHTML = 
            `<h2>${pokemon.name}</h2>`
            
            
            
            //habilidades
            document.getElementById("Habilidades").innerHTML =
            `<h4>${pokemon.abilities[0].ability.name}</h4>
            <h4>${pokemon.abilities[1].ability.name}</h4>`
            

            

            
           // console.log(pokemon.abilities)
            
        })
    })
}


