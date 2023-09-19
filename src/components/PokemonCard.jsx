import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StarOutlined } from '@ant-design/icons';

const PokemonCard = ({ name, image, types }) => {
    return (
        <Card
            title={name}
            cover={
                <img
                    src={image}
                    alt={name}
                />
            }
            extra={
                <StarOutlined />
            }
        >
            <Meta description={types} />
        </Card>
    )
}

export default PokemonCard;
