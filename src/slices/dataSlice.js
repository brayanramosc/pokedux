import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemon, getPokemonDetails } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
    pokemons: [],
    filteredPokemons: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        const pokemonList = await getPokemon();

        const pokemonDetailed = await Promise.all(
            pokemonList.map(pokemon => getPokemonDetails(pokemon))
        );

        dispatch(setPokemons(pokemonDetailed));
        dispatch(setLoading(false));
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
            state.filteredPokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex(
                pokemon => pokemon.id === action.payload.pokemonId
            )

            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;
                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
                state.filteredPokemons = state.pokemons;
            }
        },
        setFilteredPokemons: (state, action) => {
            const newPokemons = state.pokemons.filter(
                (pokemon) => pokemon.name.includes(action.payload)
            );

            state.filteredPokemons = newPokemons;
        }
    }
})

export const { setFavorite, setPokemons, setFilteredPokemons } = dataSlice.actions;
export default dataSlice.reducer;
