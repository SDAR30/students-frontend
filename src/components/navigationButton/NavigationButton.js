import React from 'react';
import './CreateNewUser.scss'
import Button from '@mui/material/Button';

function NavigationButton({buttonText='button'}) {
    return (
        <div className='navigationButton'>
                <Button
                    variant="contained"
                    size='large'
                >
                    {buttonText}
                </Button>
            </div>
    );
}

export default NavigationButton;