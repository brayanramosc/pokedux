import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useDispatch } from 'react-redux';

import StarButton from './StarButton';
import { setFavorite } from '../redux/actions';
import './PokemonCard.css';
const PokemonCard = ({ name, image, types, id, isFavorite }) => {
    const dispatch = useDispatch();

    const handleOnFavorite = () => dispatch(setFavorite({ pokemonId: id }));

    return (
        <Card className='PokemonCard'
            title={name}
            cover={
                <img
                    src={image}
                    alt={name}
                />
            }
            extra={
                <StarButton
                    isFavorite={isFavorite}
                    handleClick={handleOnFavorite}
                />
            }
        >
            <Meta description={types} />
        </Card>
    )
}

export default PokemonCard;
