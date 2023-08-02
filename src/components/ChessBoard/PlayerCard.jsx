// PlayerCard.js

import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

const PlayerCard = ({ name, elo, handleClick }) => {
    return (
        <div className="name-icon" onClick={handleClick}>
            <Tooltip title={name}>
                <Avatar
                    variant="square"
                    alt={name}
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 24, height: 24 }}
                />
            </Tooltip>
            <h2>{name}</h2>
            <p>({elo})</p>
        </div>
    );
};

export default PlayerCard;
