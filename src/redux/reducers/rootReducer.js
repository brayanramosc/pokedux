// import { combineReducers } from 'redux-immutable';
// import { pokemonReducer } from './pokemons';
// import { uiReducer } from './ui';
import { combineReducers } from 'redux';
import dataReducer from '../../slices/dataSlice';
import uiReducer from '../../slices/uiSlice';

const rootReducer = combineReducers({
    data: dataReducer,
    ui: uiReducer,
});

export default rootReducer;
