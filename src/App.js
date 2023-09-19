import { useEffect } from 'react';
// import { connect } from 'react-redux';
import { Col } from 'antd';

import logo from './assets/images/pokedex_vector_logo.png';
import 'antd/dist/reset.css';
import './App.css';

import { setPokemons } from './redux/actions';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { getPokemon, getPokemonDetails } from './api';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonList = await getPokemon();
      const pokemonDetailed = await Promise.all(pokemonList.map(pokemon => getPokemonDetails(pokemon)));
      dispatch(setPokemons(pokemonDetailed));
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

// Sin utilizar hooks de react-redux
// const mapStateToProps = (state => ({
//   pokemons: state.pokemons,
// }));

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
