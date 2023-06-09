import "../.././styles/SignUp.css";
import { useContext, useState } from "react";
import { validateEmail } from "../ValidateEmail";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from '../useTheme';
import { AuthContext } from "../useAuth";


const InvalidEmailMessage = () => {
    return (
        <div>Email is invalid.</div>
    )
};

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState({ value: "", isTouched: false });
    const [password, setPassword] = useState({ value: "", isTouched: false, });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", isTouched: false });
    const [address, setAddress] = useState({ value: "", isTouched: false })
    const [role, setRole] = useState("Role");
    const [year, setYear] = useState('');

    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);


    const { userData, setUserData, login } = useContext(AuthContext);

    const INPUT_STYLES = {
        backgroundColor: theme === 'light' ? 'var(--white)' : 'var(--darkGray)',
        border: theme === 'light' ? null : '1px solid var(--veryDarkGray)',
        color: theme === 'light' ? 'var(--black)' : 'var(--white)'
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 124 }, (_, i) => currentYear - i);

    const getIsFormValid = () => {
        return (
            firstName &&
            validateEmail(email.value) &&
            password.value.length >= 8 &&
            confirmPassword.value.length >= 8 &&
            address.value !== '' &&
            role !== "role" &&
            year !== ""
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail({ value: "", isTouched: false });
        setPassword({ value: "", isTouched: false });
        setAddress({ value: '', isTouched: false });
        setRole("role");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email.value,
            password: password.value,
            address: address.value,
            role: role,
            yearOfBirth: year
        };

        if (localStorage.getItem(email.value) === null) {
            localStorage.setItem(email.value, JSON.stringify(newUser));
            setUserData({ name: firstName, lastname: lastName, email: email.value, password: password.value, address: address.value, role: role, yob: year });
            login()
            alert('Account created successfully!');
            setTimeout(navigate('/'), 2000);
        }
        else {
            alert('A user with this email already exists.')
        }
        clearForm();
    };

    const [validationMessage, setValidationMessage] = useState('');


    const validatePassword = () => {
        const hasCapitalLetter = /[A-Z]/.test(password.value);
        const hasNumber = /\d/.test(password.value);
        const hasSpecialChar = /[!@#$%^&*]/.test(password.value);

        if (hasCapitalLetter && hasNumber && hasSpecialChar && password.value.length >= 8) {
            setValidationMessage('Password is valid.');
        }
        else {
            let message = 'Password must contain:\n'
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
                message += '- should have at least 8 characters.'
            }
            setValidationMessage(message);
        }
    };

    const [confirmValidationMessage, setConfirmValidationMessage] = useState('');

    const validateConfirmPassword = () => {
        const hasCapitalLetter = /[A-Z]/.test(confirmPassword.value);
        const hasNumber = /\d/.test(confirmPassword.value);
        const hasSpecialChar = /[!@#$%^&*]/.test(confirmPassword.value);

        if (hasCapitalLetter && hasNumber && hasSpecialChar && confirmPassword.value.length >= 8 && (password.value === confirmPassword.value)) {
            setConfirmValidationMessage('Password is valid.');
        }
        else {
            let message = 'Password must contain:\n'
            if (!hasCapitalLetter) {
                message += '- at least one capital letter\n'
            }
            if (!hasNumber) {
                message += '- at least one number\n'
            }
            if (!hasSpecialChar) {
                message += '- at least one special character\n'
            }
            if (confirmPassword.value.length < 8) {
                message += '- should have at least 8 characters.\n'
            }
            if (password.value !== confirmPassword.value) {
                message += '- Passwords do NOT match.'
            }
            setConfirmValidationMessage(message);
        }
    };


    return (
        <section className="sign-up-container">
            <div className='logo-sign-up'>QUICKMART</div>
            <div className="signup">
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset-signup">
                        <h2>Sign Up</h2>
                        <div className="Field">
                            <label className="label-signup">
                                First name <sup className="sup-signup">*</sup>
                            </label>
                            <input className="input-signup" placeholder="First name" style={INPUT_STYLES} value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                        </div>
                        <div className="Field">
                            <label className="label-signup">Last name</label>
                            <input className="input-signup" placeholder="Last name" style={INPUT_STYLES} value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                        </div>
                        <div className="Field">
                            <label className="label-signup">
                                Email <sup className="sup-signup">*</sup>
                            </label>
                            <input className='input-signup' placeholder='Email' style={INPUT_STYLES}
                                value={email.value}
                                onChange={(e) => { setEmail({ ...email, value: e.target.value, isTouched: true }) }}
                                onBlur={() => { setEmail({ ...email, isTouched: true }); }}
                            />
                            <div className='email-validation-message'>
                                {(email.isTouched && !validateEmail(email.value)) ? <InvalidEmailMessage /> : null}
                            </div>
                        </div>
                        <div className="Field">
                            <label className="label-signup">
                                Password <sup className="sup-signup">*</sup>
                            </label>
                            <input className="input-signup" placeholder="Password" type="password" style={INPUT_STYLES} value={password.value}
                                onChange={(e) => { setPassword({ ...password, value: e.target.value }); }}
                                onKeyUp={() => { validatePassword(password.value); }}
                                onBlur={() => { setPassword({ ...password, isTouched: true }); }} />
                            <div className='validation-message' style={{ color: validationMessage.includes('valid') ? '#34A853' : '#FF5252' }}>
                                {validationMessage}
                            </div>
                        </div>
                        <div className="Field">
                            <label className="label-signup">
                                Confirm Password <sup className="sup-signup">*</sup>
                            </label>
                            <input className="input-signup" placeholder="Confirm password" type="password" style={INPUT_STYLES} value={confirmPassword.value}
                                onChange={(e) => { setConfirmPassword({ ...confirmPassword, value: e.target.value }); }}
                                onKeyUp={() => { validateConfirmPassword(confirmPassword.value); }}
                                onBlur={() => { setConfirmPassword({ ...confirmPassword, isTouched: true }); }} />
                            <div className='validation-message' style={{ color: confirmValidationMessage.includes('valid') ? '#34A853' : '#FF5252' }}>
                                {confirmValidationMessage}
                            </div>
                        </div>
                        {/* {} */}
                        <div className="Field">
                            <label className="label-signup">
                                Address <sup className="sup-signup">*</sup>
                            </label>
                            <input className="input-signup" placeholder="Address" style={INPUT_STYLES} value={address.value}
                                onChange={(e) => { setAddress({ ...address, value: e.target.value }); }}
                                onBlur={() => { setAddress({ ...address, isTouched: true }); }} />
                        </div>

                        <div className="Field">
                            <label className="label-signup">
                                Role <sup className="sup-signup">*</sup>
                            </label>
                            <select className="input-signup" value={role} style={INPUT_STYLES} onChange={(e) => setRole(e.target.value)}>
                                <option>Role</option>
                                <option>Individual</option>
                                <option>Business</option>
                            </select>
                        </div>
                        <div className='Field'>
                            <label className='label-signup'>Year of Birth</label>
                            <select className='input-signup' value={year} style={INPUT_STYLES} onChange={handleYearChange}>
                                <option value="">Select Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button className="button-signup" type="submit" disabled={!getIsFormValid()}>
                            Create account
                        </button>
                        <div className="sign-in">
                            <p>Do you have already and account? <span onClick={() => { navigate('/Login.js'); }}>Login</span></p>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}

export default SignUp;
