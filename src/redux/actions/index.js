import { getPokemonDetails } from "../../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./actions";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
})

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
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
