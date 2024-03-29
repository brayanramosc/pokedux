import { useEffect, useState } from 'react';
import { Col, Spin } from 'antd';
// import { connect } from 'react-redux';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { fetchPokemonsWithDetails } from './slices/dataSlice';
import logo from './assets/images/pokedex_vector_logo.png';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import 'antd/dist/reset.css';
import './App.css';
const bodyColors = ["#352F44","white"];
function App() {
  // const pokemons = useSelector(state => state.data.pokemons, shallowEqual);
  const filteredPokemons = useSelector(state => state.data.filteredPokemons, shallowEqual);
  const isLoading = useSelector(state => state.ui.isLoading);
  // const pokemons = useSelector(state => state.getIn(['data', 'pokemons'], shallowEqual)).toJS();
  // const isLoading = useSelector(state => state.get(['ui', 'isLoading']));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, [dispatch])
  const [isDark, settheme] = useState(0);
  const themes = ["clear", "dark"];
  
  return (
    <div className="App">
      <button onClick={()=>{settheme((isDark+1)%2);
       document.querySelector("body").style.backgroundColor = bodyColors[isDark];
      }} id="theme-button">☀️</button>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedex'  />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {isLoading
        ? <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
        : <PokemonList theme={themes[isDark]} pokemons={filteredPokemons} />
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
