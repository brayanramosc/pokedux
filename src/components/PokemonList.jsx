import React from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemons,theme }) => {
    return (
        <div className={"pokemon-list-"+theme}>
            {
                pokemons.map((pokemon) => {
                    return <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        types={pokemon.types.map(type => type.type.name).join(', ')}
                        id={pokemon.id}
                        isFavorite={pokemon.favorite}
                        theme = {"card-"+theme}
                    />
                })
            }
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export default PokemonList;
