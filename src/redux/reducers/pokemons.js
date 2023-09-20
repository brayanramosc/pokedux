import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/actions";

const initialState = {
    pokemons: [],
    isLoading: false
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case SET_FAVORITE:
            const newPokemonList = [...state.pokemons];
            const currentPokemonIndex = newPokemonList.findIndex(
                pokemon => pokemon.id === action.payload.pokemonId
            )

            if (currentPokemonIndex < 0) return state;

            newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
            return {
                ...state,
                pokemons: newPokemonList
            }

        default:
            return state;
    }
}
