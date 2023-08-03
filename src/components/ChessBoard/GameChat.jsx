import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Typography } from '@mui/material';

const GameChat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, sender: 'You' }]);
            setNewMessage('');
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                Game Chat
            </Typography>
            <Box sx={{ maxHeight: 300, overflow: 'auto', marginBottom: 1 }}>
                {messages.map((message, index) => (
                    <div key={index}>
                        <Typography variant="body1" gutterBottom>
                            <strong>{message.sender}:</strong> {message.text}
                        </Typography>
                    </div>
                ))}
            </Box>
            <Box display="flex" alignItems="center">
                <TextField
                    label="Type your message"
                    variant="outlined"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    sx={{ flex: 1 }}
                />
                <Button variant="contained" color="primary" onClick={handleSendMessage}>
                    Send
                </Button>
            </Box>
        </Paper>
    );
};

export default GameChat;