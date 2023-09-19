import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export const getPokemon = () => {
    return axios.get(`${BASE_URL}pokemon?limit=151`)
        .then(res => res.data.results)
        .catch(e => console.log(e))
}

export const getPokemonDetails = (pokemon) => {
    return axios.get(pokemon.url)
        .then(res => res.data)
        .catch(e => console.log(e))
}
