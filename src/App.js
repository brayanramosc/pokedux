import { Col } from 'antd';

import logo from './assets/images/pokedex_vector_logo.png';
import 'antd/dist/reset.css';
import './App.css';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <Col span={6} offset={9}>
        <img src={logo} alt='Pokedex' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
