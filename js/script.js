const getPokemon = document.getElementById('get-pokemon');
const selectPokemon = document.getElementById('pokemon-select');
const container = document.querySelector('.container');
let div = document.createElement('div');
div.id = 'pokemon-info';

function getInfoPokemon(poke){
    div.innerHTML = '';
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        .then((response) => {
            if(!response.ok){
                throw new Error ('Respuesta no conseguida')     
            }else{
                return response.json();
            }

        }).then((data) => {
            showInfoPokemon(data);

        }).catch((error) => {
            div.innerHTML = '<p>Error: No se ha podido obtener la información</p>';
            container.appendChild(div);
        });
}

getPokemon.addEventListener('click', () => {
    let valuePoke = selectPokemon.value;
    getInfoPokemon(valuePoke);
});


function showInfoPokemon(data){
    const name = document.createElement('p');
    const peso = document.createElement('p');
    const altura = document.createElement('p');
    const tipo = document.createElement('p');
    const imagen = document.createElement('img');
    name.innerHTML = `<span>Nombre:</span> ${data.name}`;
    peso.innerHTML = `<span>Peso:</span> ${data.weight}`;
    altura.innerHTML= `<span>Altura:</span> ${data.height}`;
    imagen.src = data.sprites.other.dream_world.front_default;
    tipo.innerHTML = `<span>Tipo/s:</span> ${data.types.map(type => type.type.name)}`;
    div.appendChild(name);
    div.appendChild(peso);
    div.appendChild(altura);
    div.appendChild(tipo);
    div.appendChild(imagen);
    container.appendChild(div);
}