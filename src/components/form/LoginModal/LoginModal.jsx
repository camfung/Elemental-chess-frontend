import React from 'react';
import { Modal, Box, Typography, TextField, FormControlLabel, Checkbox } from '@mui/material';
import RedirectButton from '../../ui/RedirectButton';
const LoginModal = ({ open, handleClose }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='primary-bgd' component={"form"}>
                <TextField id="outlined-basic" label="UserName or Email" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <p>Forgot Password?</p>
                <RedirectButton label="login"></RedirectButton>
            </Box>
        </Modal>
    );
};

export default LoginModal;
