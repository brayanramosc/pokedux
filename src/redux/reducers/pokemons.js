import { SET_LOADING, SET_POKEMONS } from "../actions/actions";

const initialState = {
    pokemons: [],
    isLoading: false
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        default:
            return state;
    }
}
