$(document).ready( () =>{
    $(".btn-ball").click( () =>{
        let name = $("#search").val();
            console.log("solicitando data ... ")
            fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${name}`)
            .then( (response) => {
                 return response.json(); 
            })
            .then( (data) => {
                console.log(data);
                const allInfo = data.species.url;
                console.log(allInfo); 
                const height = parseInt(data.height) /10;
                const weight = parseInt(data.weight) /10;
                const ruta= data.sprites.front_default;
                getSpecies(allInfo);
                $("#imagen-pokemon").attr("src", ruta)
                $("#imagen-pokemon").attr("alt", data.name)

                $("#heigth").html(`  * <b>Heigth :</b> ${height} [m]`);
                $("#weigth").html(`  * <b>Weigth :</b> ${weight} [kg]`); 

        })   
    }) /*evento*/
}) /*document*/

function getSpecies (url){
    fetch(`${url}`)
    .then( (response) => {
        return response.json()
    })
    .then ( (data2) => {
        console.log(data2);
        const name= data2.name;
        const evoluciones = data2.evolves_from_species; 
        const description_one= data2.flavor_text_entries[1].flavor_text; 
        const description_dos= data2.flavor_text_entries[9].flavor_text; 
        const description_tres= data2.flavor_text_entries[17].flavor_text; 
        const description_cuatro= data2.flavor_text_entries[25].flavor_text; 
        const description_cinco= data2.flavor_text_entries[32].flavor_text; 
        const description_seis= data2.flavor_text_entries[40].flavor_text; 
        $("#name").html(`<b>Name :</b> ${name}`);
        $("#description").html(`<b>Description : </b>${description_one}
            ${description_dos}
            ${description_tres}
            ${description_cuatro}
            ${description_cinco}
            ${description_seis}`)
        const evolution = data2.evolves_from_species.name;
        $("#evolution").html(`<b>Evolution : </b> ${evolution}`); 
        $(".preloader-2").addClass("hidden")
        $("#search").val("");

    })
}