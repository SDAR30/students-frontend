import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import "./LoginModal2.scss"
import LoginForm from './LoginForm';
import CreateForm from './CreateForm';

function LoginModal2({ openLoginModal, setOpenLoginModal }) {
    const [login, setLogin] = useState(true)

    const handleClose = () => {
        setOpenLoginModal(false)
    }

    const changeLogStatus = () =>{
        setLogin(!login)
    }

    return (
        <Modal
            className='loginModal'
            open={openLoginModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='loginGrid'>
                <div>Log in</div>
                <div>sign in</div>
                {login ? <LoginForm /> : <CreateForm /> }
                <div onClick={changeLogStatus}>{login ? "Don't have an Account? Sign up Instead": "Already a member? Log in"}</div>
            </div>
        </Modal>
    );
}

export default LoginModal2;