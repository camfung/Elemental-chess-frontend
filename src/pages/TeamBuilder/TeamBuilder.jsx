import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PermanentDrawerLeft from '../../components/ui/navigation/PermanentDrawerLeft';
import GridOfButtons from './GridOfButtons';
import SavedTeams from './SavedTeams';
import TeamBuilderGrid from './TeamBuilderGrid'
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import SnackBarWrapper from '../../components/ui/navigation/util/SnackBarWrapper';
import { PokemonTypes } from '../../utils/Enums';
import "./TeamBuilder.css"
const styles = {
    container: {
        maxWidth: '100%',
        margin: '0 auto',
        height: '90vh'

    },
    firstBox: {
        flexBasis: '75%', // Three-fourths width
        maxWidth: '75%', // Three-fourths width
    },
    secondBox: {
        flexBasis: '25%', // One-fourth width
        maxWidth: '25%', // One-fourth width
    },
};

const TeamBuilder = () => {

    const [selectedType, setSelectedType] = useState('');
    const [teamBuilderGridClicked, setTeamBuilderGridClicked] = useState(false);
    const [selectedColor, setSelectedColor] = useState('white');
    const [pieceElementalTypes, setPieceElementalTypes] = useState([["None", "None", "None", "None", "None", "None", "None", "None"], ["None", "None", "None", "None", "None", "None", "None", "None"]]);
    const [inGame, setInGame] = useState(false);

    const resetTeamBuilderGrid = useCallback(() => {

        setPieceElementalTypes([["None", "None", "None", "None", "None", "None", "None", "None"], ["None", "None", "None", "None", "None", "None", "None", "None"]]);

    }, [setPieceElementalTypes, pieceElementalTypes]);

    const handlSwitchChange = (event) => {
        setSelectedColor(event.target.checked ? 'white' : 'black')
    }

    const handleSave = useCallback(() => {
        alert("Saved")
    }, [pieceElementalTypes]);

    const isTypeInArray = useCallback((type, array) => {
        for (let ele of array) {
            if (ele.includes(type)) {
                return true;
            }
        }
        return false;
    }, [pieceElementalTypes]);

    const handleRandomTeam = useCallback(() => {
        setPieceElementalTypes(prevState => {
            const newPieceElementalTypes = [...prevState];
            for (let row = 0; row < 2; row++) {
                for (let col = 0; col < 8; col++) {
                    let randomType = Math.floor(Math.random() * 18);
                    while (isTypeInArray(Object.keys(PokemonTypes)[randomType], newPieceElementalTypes)) {
                        randomType = Math.floor(Math.random() * 18);
                    }
                    newPieceElementalTypes[row][col] = Object.keys(PokemonTypes)[randomType];
                }
            }
            return newPieceElementalTypes;
        });
    }, [setPieceElementalTypes]);

    const handleGridOfButtonsClick = useCallback((e) => {
        setSelectedType(e.target.innerHTML);
    }, [selectedType]);

    const handleTeamBuilderGridClick = (row, col) => {
        if (selectedType !== '') {
            let newPieceElementalTypes = pieceElementalTypes;
            for (let ele of newPieceElementalTypes) {
                if (ele.includes(selectedType)) {
                    alert("You can only have one of each type on your team")
                    setSelectedType("")
                    return;
                }
            }
            newPieceElementalTypes[row][col] = selectedType;
            setPieceElementalTypes(newPieceElementalTypes);
            setTeamBuilderGridClicked(true);
            setSelectedType("")
        } else {
            alert("Please select a type first")
        }
    }
    const test = useCallback(() => {
        console.log(JSON.stringify(pieceElementalTypes))
    })
    return (
        <>
            <PermanentDrawerLeft>
                <Grid container spacing={1} sx={{ maxWidth: '100%', margin: '0 auto', height: '90vh', justifyContent: 'space-between' }}>
                    {/* First column taking two-thirds of the width */}
                    <Grid item xs={9} sx={{ display: "grid", marginTop: '20px', marginBottom: '20px', padding: '10px', alignItems: 'center' }}>
                        <Box className="board">
                            <TeamBuilderGrid
                                pieceColor={selectedColor}
                                teamBuilderGridClicked={teamBuilderGridClicked}
                                pieceElementalTypes={pieceElementalTypes}
                                handleTeamBuilderGridClick={handleTeamBuilderGridClick}
                                selectedType={selectedType}
                            >

                            </TeamBuilderGrid>
                        </Box>
                        <GridOfButtons
                            handleGridOfButtonsClick={handleGridOfButtonsClick}
                        >

                            <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                {!inGame && <FormControlLabel sx={{ color: "white" }} control={<Switch defaultChecked onChange={handlSwitchChange} />} label={selectedColor} />}
                                <Button onClick={resetTeamBuilderGrid} variant='contained'>Reset</Button>
                                <Button onClick={handleSave} variant='contained'>Save</Button>
                                <Button onClick={handleRandomTeam} variant='contained'>Random</Button>
                            </div>

                        </GridOfButtons>

                    </Grid>

                    {/* Second column taking one-third of the width */}
                    <Grid item xs={3}>
                        <SavedTeams names={["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6"]} />
                    </Grid>
                </Grid>
                {/* <SnackBarWrapper message={message} severity="warning" /> */}
            </PermanentDrawerLeft>
        </>
    );
};

export default TeamBuilder;