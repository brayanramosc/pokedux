import { SET_POKEMONS } from "../actions/actions";

const initialState = {
    pokemons: []
};

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }

        default:
            return state;
    }
}
