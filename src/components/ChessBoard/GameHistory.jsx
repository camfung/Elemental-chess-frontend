import React from 'react';
import { Box, Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';


const GameHistory = ({ history }) => {
    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                Game History
            </Typography>
            <List>
                {history.map((item, index) => (
                    <React.Fragment key={index}>
                        <ListItem>
                            <ListItemText primary={`Round ${index + 1}`} secondary={`Result: ${item.result}`} />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
};
export default GameHistory;