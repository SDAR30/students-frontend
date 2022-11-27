import React, {useState} from 'react';
import DialogSignin from '../components/dialogSignin/DialogSignin';
//import LoginModal from '../components/loginModal/LoginModal';
import LoginModal2 from '../components/loginModal2/LoginModal2';

function About() {
    const [showSigninDialog, setShowSigninDialog] = useState(false);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    //const [openLoginModal2, setOpenLoginModal2] = useState(false);

    const styles = {
        button1: {
            border: '1px solid blue', 
            padding: '10px',
            border_radius: '20px',
            display: 'inline-block',
            cursor: 'pointer'
        },
        button2: {
            border: '1px solid red', 
            padding: '10px',
            border_radius: '20px',
            display: 'inline-block',
            cursor: 'pointer'
        }
        ,
        button3: {
            border: '1px solid green', 
            padding: '10px',
            border_radius: '20px',
            display: 'inline-block',
            cursor: 'pointer'
        }
    }


    return (
        <div>
            <div style={styles.button1} onClick={() => setShowSigninDialog(true)}>Add Picture</div>
            <DialogSignin open={showSigninDialog} setOpen={setShowSigninDialog}/>
{/* 
            <div style={styles.button2} onClick={() => setOpenLoginModal(true)}>Sign in</div>
            <LoginModal openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal}/> */}

            <div style={styles.button3} onClick={() => setOpenLoginModal(true)}>Create an account</div>
            <LoginModal2 openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal}/>
            
        </div>
    );
}

export default About;