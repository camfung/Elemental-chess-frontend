import React from 'react';
import Timer from './Timer';
import { Avatar } from '@mui/material';
import "./PlayerHeader.css"


function PlayerHeader(props) {
  const { name, initialTime, addedTime, isRunning, addTime, elo } = props
  return (
    <div className="player-header transparentBlack-bgd primary-txt">
      <div class="name-icon">
        <Avatar
          variant="square"
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 24, height: 24 }}
        />
        <h2>{name}</h2>
        <p>({elo})</p>
      </div>
      <Timer
        initialTime={initialTime}
        addedTime={addedTime}
        isRunning={isRunning}
        addTime={addTime}
      />
    </div>
  );
}

export default PlayerHeader;
