import React, { useContext, useDebugValue, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './useAuth';
import '.././styles/Modal.css';
import { validateEmail } from './ValidateEmail';
import back from '.././assets/back.svg';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: 'white',
    padding: '50px 25px',
    zIndex: 1000,
};

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7',
    zIndex: 1000
};


const InvalidEmailMessage = () => {
    return (
        <div>Email is invalid.</div>
    )
};

export default function Modal(props) {
    const { login, logout, userData, setUserData } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: '', isTouched: false });
    const [password, setPassword] = useState({ value: '', isTouched: false });
    const [validityMessage, setValidityMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const storedUser = localStorage.getItem(email.value);
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (user.email === email.value && user.password === password.value) {
                // console.log('Login successfully');
                setUserData({ ...userData, name: user.firstName, lastname: user.lastName, email: user.email, password: user.password, role: user.role, yob: user.yearOfBirth });
                login();
                props.onClose();
                navigate('/');
            }
            else {
                setValidityMessage('Invalid username or password.');
            }
        }
        else {
            setValidityMessage('Invalid username or password.');
        }
    };


    if (!props.open) {
        return null
    }
    return (
        <>
            <div style={OVERLAY_STYLES} />
            <div className='log-container' style={MODAL_STYLES}>
                <button onClick={props.onClose} className='close-modal'><img src={back} />Back</button>
                <form className='login' onSubmit={handleSubmit}>
                    <fieldset className='fieldset-signup'>
                        <h2 className='login-header'>Login</h2>
                        <div className='Field'>
                            <label className='label-signup'>
                                Email
                            </label>
                            <input className='input-signup' placeholder='Email'
                                value={email.value}
                                onChange={(e) => { setEmail({ ...email, value: e.target.value, isTouched: true }) }}
                                onBlur={() => { setEmail({ ...email, isTouched: true }); }}
                            />
                            <div className='email-validation-message'>
                                {(email.isTouched && !validateEmail(email.value)) ? <InvalidEmailMessage /> : null}
                            </div>
                        </div>
                        <div className='Field'>
                            <label className='label-signup'>
                                Password
                            </label>
                            <input className='input-signup' type='password' placeholder='Password'
                                value={password.value}
                                onChange={(e) => {
                                    setPassword({ ...password, value: e.target.value, isTouched: true });
                                }}
                                onBlur={() => {
                                    setPassword({ ...password, isTouched: true });
                                }}
                            />
                            <div className='password-email-validation'>
                                {validityMessage}
                            </div>
                        </div>
                        <div className='forgot-password'>
                            Forgot password?
                        </div>
                        <button type='submit' className='login-button'>Login</button>
                        <div className='sign-up-option'>
                            Don't you have an account? <span onClick={() => { navigate('/SignUp.js') }}>Sign up</span>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}