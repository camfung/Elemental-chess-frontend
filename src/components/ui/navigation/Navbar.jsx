import React from 'react';
import ButtonCluster from './ButtonCluster';
import RedirectButton from './RedirectButton';
import ActionButton from './ActionButton';
import "./Navbar.css"
import { Slide, Box, FormControlLabel, Switch, Paper } from '@mui/material';
const NavBar = () => {

  const [playChecked, setPlayChecked] = React.useState(false);
  const [teamsChecked, setTeamsChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = (passedValue) => {
    passedValue((prev) => !prev);
  };

  return (
    <>

      <div class="parent">

        <div class="div1" >
          <div className="big-buttons">

            <div className='button-group'>
              <RedirectButton label="Quick Standard" />
              <RedirectButton label="Quick Random" flipped />
            </div>

            <div ref={containerRef} className='button-group right-buttons'>
              <ActionButton onClick={() => { handleChange(setPlayChecked) }} pageName={"play"} label="Play" />
              <ActionButton onClick={() => { handleChange(setTeamsChecked) }} label="Teams" flipped />
            </div>

          </div>
        </div>
        <Slide direction="right" in={playChecked} container={containerRef.current}>

          <div class="div2 right-buttons small">
            <div className="little-buttons">
              <RedirectButton pageName={"play"} label="Ranked Standard" />
              <RedirectButton label="Ranked Random" className='bottom-button' />
            </div>
            <div className="little-buttons right-buttons">
              <RedirectButton label="Private Game" />
              <RedirectButton label="Join Game" className='bottom-button' />
            </div>
          </div>

        </Slide>
        <Slide direction="right" in={teamsChecked} container={containerRef.current}>
          <div class="div3 right-buttons">
            <div className="little-buttons">
              <RedirectButton label="Sets" flipped className='top-button' />
              <RedirectButton label="Monsters" flipped />
            </div>

          </div>
        </Slide>

      </div>
    </>
  );
};

export default NavBar;
