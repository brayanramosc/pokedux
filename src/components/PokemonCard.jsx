import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StarOutlined } from '@ant-design/icons';

const PokemonCard = ({ name }) => {
    return (
        <Card
            title={name}
            cover={
                <img
                    src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png'
                    alt='Ditto'
                />
            }
            extra={
                <StarOutlined />
            }
        >
            <Meta description="fire, magic" />
        </Card>
    )
}

export default PokemonCard;
