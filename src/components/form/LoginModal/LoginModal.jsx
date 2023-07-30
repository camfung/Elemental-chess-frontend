import { React, useState } from 'react';
import { Modal, Box, Typography, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';
import RedirectButton from '../../ui/navigation/RedirectButton';
const LoginModal = ({ open, handleClose }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        boxShadow: 24,
        p: 4,

        display: "flex",
        flexDirection: "column",
    };

    const linkStyle = {
        color: 'blue', // Change this to the desired color for the link
        textDecoration: 'underline', // Add an underline to the link text
        cursor: 'pointer', // Change the cursor to a pointer on hover
        display: 'inline-block',
    };

    const textFieldStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    };

    const checkBoxGroup = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const buttonGroup = {
        display: "flex",
        width: "100%",
    }

    const buttonStyle = {
        flexGrow: 1,
        gap: "1rem",
    }
    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='primary-bgd' component={"form"}>
                <Box sx={textFieldStyle}>
                    <TextField id="outlined-basic" label="UserName or Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                </Box>
                <Box sx={checkBoxGroup}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    <a
                        style={linkStyle}
                    >
                        Forgot Password?
                    </a>
                </Box>

                <Box sx={buttonGroup}>
                    {/* <Button variant="contained" sx={buttonStyle}>Login</Button>
                    <Button variant="contained" sx={buttonStyle}>Sign up</Button> */}
                    <RedirectButton flipped label={"Login"}></RedirectButton>
                    <RedirectButton style={{ translate: "-21%" }} flipped label={"Sign up"}></RedirectButton>
                </Box>

            </Box>
        </Modal>
    );
};

export default LoginModal;
