import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './LoginForm.scss'

function LoginForm(props) {
    return (
        <div className='loginForm'>
            <Typography className='loginModal__title' id="modal-modal-title" variant="h6" component="h2">
                Log In:
            </Typography>
            <TextField id="outlined-basic" label="Username" variant="outlined" required />
            <TextField id="outlined-basic" label="Password" variant="outlined" required />
            <Button variant="contained">Log In</Button>
        </div>
    );
}

export default LoginForm;