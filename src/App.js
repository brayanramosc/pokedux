import { Col } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
