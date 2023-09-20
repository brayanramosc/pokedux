import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "../actions/actions";
import { fromJS } from 'immutable';

const initialState = fromJS({
    pokemons: [],
    isLoading: false
});

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            // return {
            //     ...state,
            //     isLoading: action.payload
            // }
            return state.setIn(['isLoading'], action.payload)
        case SET_POKEMONS:
            // return {
            //     ...state,
            //     pokemons: action.payload
            // }
            return state.setIn(['pokemons'], fromJS(action.payload))
        case SET_FAVORITE:
            // const newPokemonList = [...state.pokemons];
            // const currentPokemonIndex = newPokemonList.findIndex(
            //     pokemon => pokemon.id === action.payload.pokemonId
            // )
            const currentPokemonIndex = state.get('pokemons').findIndex(
                pokemon => pokemon.get('id') === action.payload.pokemonId
            )

            if (currentPokemonIndex < 0) return state;

            // newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
            const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']);

            // return {
            //     ...state,
            //     pokemons: newPokemonList
            // }

            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite)

        default:
            return state;
    }
}
