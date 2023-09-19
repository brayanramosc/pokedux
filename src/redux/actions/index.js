import { getPokemonDetails } from "../../api";
import { SET_POKEMONS } from "./actions";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})

export const getPokemonWithDetails =
    (pokemons = []) =>
        async (dispatch) => {
            const pokemonDetailed = await Promise.all(
                pokemons.map(pokemon => getPokemonDetails(pokemon))
            );

            dispatch(setPokemons(pokemonDetailed));
        }
