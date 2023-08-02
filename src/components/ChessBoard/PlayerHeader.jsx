import React, { useState } from 'react';
import Timer from './Timer';
import { Avatar, Tooltip, Popover, Paper, Box } from '@mui/material';
import PlayerCard from './PlayerCard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import './PlayerHeader.css';

const paperStyles = {
  width: '100%',
  height: '100%',
  backgroundColor: '#ffffffb6',
  padding: '10px',
}
function PlayerHeader(props) {
  const { name, initialTime, addedTime, isRunning, addTime, elo } = props;
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div className="player-header transparentBlack-bgd primary-txt">
      <PlayerCard name={name} elo={elo} handleClick={handleClick} />
      <Timer initialTime={initialTime} addedTime={addedTime} isRunning={isRunning} addTime={addTime} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Paper className="popover-content" sx={paperStyles} elevation={24}>
          <PlayerCard name={name} elo={elo} />
          <Box>
            <Tooltip title="Add Friend">
              <PersonAddIcon />
            </Tooltip>
            <Tooltip title="Report Player">
              <ErrorOutlineIcon />
            </Tooltip>
          </Box>
        </Paper>
      </Popover>
    </div>
  );
}

export default PlayerHeader;
