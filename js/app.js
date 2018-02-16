$.ajax({
	url: `https://pokeapi.co/api/v2/pokedex/1/`
}).done(handleResponse);

function handleResponse(data) {
    console.log('the ajax request has finished!');
    let allPokemon= data.pokemon_entries; 
    console.log(allPokemon); 
    for (let i in allPokemon){
    	let urlPokemon= data.pokemon_entries[i].pokemon_species.url;
    	let pokemonName= data.pokemon_entries[i].pokemon_species.name;
    	$(".contenedor").append(`<div class="col-lg-2 caja-pokemon">
					<label>${pokemonName}</label>
				</div>`);
    }
}