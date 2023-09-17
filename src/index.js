import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { pokemonReducer } from './redux/reducers/pokemons';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(pokemonReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
