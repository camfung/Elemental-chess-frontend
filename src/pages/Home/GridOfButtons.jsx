import React from 'react';
import { Button, Grid } from '@mui/material';

const pokemonTypesWithColors = [
  { type: 'Fire', color: '#FF5733' },
  { type: 'Grass', color: '#33FF57' },
  { type: 'Water', color: '#5733FF' },
  { type: 'Electric', color: '#33FFFF' },
  { type: 'Psychic', color: '#FF33FF' },
  { type: 'Dragon', color: '#FFB633' },
  { type: 'Fairy', color: '#33FFB6' },
  { type: 'Fighting', color: '#B633FF' },
  { type: 'Ghost', color: '#33B6FF' },
  { type: 'Steel', color: '#B6FF33' },
];

const GridOfButtons = () => {
  return (
    <Grid container spacing={1}>
      {Array.from({ length: 6 * 3 }).map((_, index) => {
        const { type, color } = pokemonTypesWithColors[index % pokemonTypesWithColors.length];
        return (
          <Grid item xs={2} key={index}>
            <Button style={{ backgroundColor: color, width: '100%', height: '100%' }}>
              {type}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GridOfButtons;
