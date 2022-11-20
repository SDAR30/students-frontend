import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./LoginModal.scss"

function LoginModal({openLoginModal, setOpenLoginModal}) {

    const handleClose = ()=>{
        setOpenLoginModal(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
      };

      //username, password, email

    return (
         <Modal
            className="loginModal"
            open={openLoginModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
        <Box sx={style}>
          <Typography className="loginModal__title" id="modal-modal-title" variant="h6" component="h2">
            Please create an account
          </Typography>
          <TextField id="outlined-basic" label="first name" variant="outlined" />
          <TextField id="outlined-basic" label="last name" variant="outlined" required />
          <TextField id="outlined-basic" label="username" variant="outlined" required />
          <TextField id="outlined-basic" label="Email" variant="outlined" required />
          <TextField id="outlined-basic" label="Password" variant="outlined" required/>
        </Box>
      </Modal>
    );
}

export default LoginModal;