import { useEffect } from 'react';
// import { connect } from 'react-redux';
import { Col, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import logo from './assets/images/pokedex_vector_logo.png';
import 'antd/dist/reset.css';
import './App.css';

import { getPokemonWithDetails, setLoading } from './redux/actions';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import { getPokemon } from './api';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const isLoading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonList = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonList));
      dispatch(setLoading(false));
    }

    fetchPokemon();
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedex' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {isLoading
        ? <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
        : <PokemonList pokemons={pokemons} />
      }
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
