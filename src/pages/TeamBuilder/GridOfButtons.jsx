import React, { useCallback } from 'react';
import typeButton from '../../assets/typeButton.png';
import { Button, Grid } from '@mui/material';
import { PokemonTypes } from '../../utils/Enums'; // Update the import statement
import './GridOfButtons.css';

const GridOfButtons = (props) => {

  const {
    setSelectedType,
    handleGridOfButtonsClick
  } = props;
  return (
    <Grid className='back-fade' container spacing={1} style={{ width: '100%' }}>
      {Object.values(PokemonTypes).map((type, index) => ( // Using Object.values to get the enum values
        <Grid item xs={6} sm={4} md={2} key={type}>
          <div className='highlight'>
            <button onClick={(e) => { handleGridOfButtonsClick(e) }} id={index} className='image-button'>
              <img className={`typeButton ${type}`} src={typeButton} alt={type} />
              <span className="button-text type-text">{type}</span>
            </button>
          </div>
        </Grid>
      ))}
      {props.children}
    </Grid>
  );
};

export default GridOfButtons;
