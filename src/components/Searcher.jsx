import React, { useState } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';

import { setFilteredPokemons } from '../slices/dataSlice';

const Searcher = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    return (
        <Input.Search
            placeholder='Buscar por nombre...'
            onChange={(e) => setSearch(e.target.value)}
            onSearch={() => dispatch(setFilteredPokemons(search))}
            style={{
                marginBottom: 10
            }}
        />
    )
}

export default Searcher;
