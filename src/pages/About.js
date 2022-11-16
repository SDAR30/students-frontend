import React, {useState} from 'react';
import DialogSignin from '../components/dialogSignin/DialogSignin';

function About(props) {
    const [showLoginDialog, setShowLoginDialog] = useState(false);

    const styles = {
        button: {
            border: '1px solid blue', 
            padding: '10px',
            border_radius: '20px',
            display: 'inline',
            cursor: 'pointer'
        }
    }


    return (
        <div>
            <div style={styles.button} onClick={() => setShowLoginDialog(true)}>Add Picture</div>
            <DialogSignin open={showLoginDialog} setOpen={setShowLoginDialog}/>
            
        </div>
    );
}

export default About;