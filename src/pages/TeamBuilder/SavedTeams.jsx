import React from 'react';
import Box from '@mui/material/Box';
import './SavedTeams.css'
import TeamDataGrid from '../../components/datadisplay/TeamDataGrid';

const SavedTeams = ({ names }) => {

    const styles = {
        backgroundColor: '#ffffffb6',
        width: '100%',
        height: '100%',
        padding: '10px',
        // marginLeft: '10px',
    }

    return (
        //     <Box sx={styles} className="side-box">
        //         <h2>Saved Teams</h2>
        //         <ul>
        //             {names.map((name, index) => (
        //                 <li key={index}>{name}</li>
        //             ))}
        //         </ul>
        //     </Box>

        <TeamDataGrid />
    );
};

export default SavedTeams;
