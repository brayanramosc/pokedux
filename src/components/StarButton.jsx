import React from 'react';
import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const StarButton = ({ isFavorite, handleClick }) => {
    const Icon = isFavorite ? StarFilled : StarOutlined;
    return <Button icon={<Icon/>} onClick={handleClick} />
}

export default StarButton;
