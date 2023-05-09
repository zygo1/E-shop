import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '.././useAuth';
import '../.././styles/Modal.css';
import { validateEmail } from '.././ValidateEmail';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: 'white',
    padding: '50px 25px',
    zIndex: 1000,
};

const InvalidEmailMessage = () => {
    return (
        <div>Email is invalid.</div>
    )
};

export default function Login() {
    const { login, setUserData, userData } = useContext(AuthContext);
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
                setUserData({ ...userData, name: user.firstName, lastname: user.lastName, email: user.email, address: user.address, password: user.password, role: user.role, yob: user.yearOfBirth });
                login();
                navigate('/');
            }
            else {
                setValidityMessage('Invalid username or password.');
            }
        }
    };

    return (
        <>
            <div className='log-container' style={MODAL_STYLES}>
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