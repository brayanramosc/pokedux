import { useEffect, useState } from 'react';
import { Col } from 'antd';

import logo from './assets/images/pokedex_vector_logo.png';
import 'antd/dist/reset.css';
import './App.css';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemon } from './api';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonList = await getPokemon();
      setPokemons(pokemonList);
    }

    fetchPokemon();
  }, [])

  return (
    <div className="App">
      <Col span={6} offset={9}>
        <img src={logo} alt='Pokedex' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
