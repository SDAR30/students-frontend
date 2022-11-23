import React from 'react';
import './NavigationButton.scss'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NavigationButton({ buttonText = 'button', url}) {
    return (
        <div className='navigationButton'>
            <Link to={url}>
                <Button
                    variant="contained"
                    size='large'
                >
                    {buttonText}
                </Button>
            </Link>
        </div>
    );
}

export default NavigationButton;