import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './CreateForm.scss'

function CreateForm(props) {
    return (
        <div className='createForm'>
            <Typography className='loginModal__title' id="modal-modal-title" variant="h6" component="h2">
                Create Account
            </Typography>
                <TextField id="outlined-basic" label="username" variant="outlined" required/>
                <TextField id="outlined-basic" label="email" variant="outlined" required />
                <TextField id="outlined-basic" label="password" variant="outlined" required />
                <Button variant="contained">Sign Up</Button>
        </div>
    );
}

export default CreateForm;