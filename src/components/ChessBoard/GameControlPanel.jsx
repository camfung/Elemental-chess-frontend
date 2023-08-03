import React from 'react';
import { Box, Paper, Button, Typography, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import FlagIcon from '@mui/icons-material/Flag';
const GameControlPanel = ({ onStart, onReset }) => {
    return (
        <>
            <Box>
                <Button variant="outlined"> Draw</Button>
                <Button variant="outlined"> <FlagIcon></FlagIcon> Resign</Button>
            </Box>
            <Box sx={{ backgroundColor: "white" }}>
                <IconButton>
                    <FirstPageIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowRightIcon />
                </IconButton>
                <IconButton>
                    <LastPageIcon />
                </IconButton>
            </Box>
        </>
    );
};
export default GameControlPanel;