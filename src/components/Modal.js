import React, { useContext, useState } from 'react';
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

const ValidEmail = () => {
    return (
        <div>Email is valid.</div>
    )
}

export default function Modal(props) {
    const { login, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: '', isTouched: false })
    const [password, setPassword] = useState({ value: '', isTouched: false })

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    const [validationMessage, setValidationMessage] = useState('')

    const validatePassword = () => {
        const hasCapitalLetter = /[A-Z]/.test(password.value);
        const hasNumber = /\d/.test(password.value);
        const hasSpecialChar = /[!@#$%^&*]/.test(password.value);

        if (hasCapitalLetter && hasNumber && hasSpecialChar && password.value.length >= 8) {
            setValidationMessage('Password is valid.')
        }
        else {
            let message = 'Password must contain:\n';
            if (!hasCapitalLetter) {
                message += '- at least one capital letter\n'
            }
            if (!hasNumber) {
                message += '- at least one number\n'
            }
            if (!hasSpecialChar) {
                message += '- at least one special character\n'
            }
            if (password.value.length < 8) {
                message += '- password should have at least 8 characters.'
            }
            setValidationMessage(message);
        }
    };

    const isPasswordValid = () => {
        if (validationMessage.includes('valid')) {
            return true;
        }
        return false;
    };

    const isFormValid = () => {
        return (
            validateEmail(email.value) &&
            isPasswordValid
        );
    }


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
                                onKeyUp={() => { validatePassword(password.value); }}
                                onBlur={() => {
                                    setPassword({ ...password, isTouched: true });
                                }}
                            />
                            <div className='validation-message' style={{ color: validationMessage.includes('valid') ? '#34A853' : '#FF5252' }}>
                                {validationMessage}
                            </div>
                        </div>
                        <div className='forgot-password'>
                            Forgot password?
                        </div>
                        <button onClick={() => { navigate('/Products.js'); props.onClose() }} disabled={!isFormValid()} type='submit' className='login-button'>Login</button>
                        <div className='sign-up-option'>
                            Don't you have an account? <span onClick={() => { navigate('/SignUp.js') }}>Sign up</span>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

// src\components\login-register\SignUp.js