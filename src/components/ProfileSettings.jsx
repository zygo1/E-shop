import '.././styles/Settings.css';
import { useContext, useState } from 'react';
import { ThemeContext } from './useTheme'
import { validateEmail } from './ValidateEmail';
import { AuthContext } from './useAuth';

export const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters.</p>
    );
};

const UsernameErrorMessage = () => {
    return (
        <p className="FieldError">Username should have at least 2 characters.</p>
    )
};

const EmailErrorMessage = () => {
    return (
        <p className="FieldError">Email is not valid.</p>
    )
};

function ProfileSettings() {
    const { userData, setUserData } = useContext(AuthContext);


    const [username, setUsername] = useState({ value: userData.name, isTouched: false });
    const [password, setPassword] = useState({ value: userData.password, isTouched: false });
    const [email, setEmail] = useState({ value: userData.email, isTouched: false });
    const [phone, setPhone] = useState({ value: '', isTouched: false });
    const [address, setAddress] = useState({ value: userData.address, isTouched: false });
    const [gender, setGender] = useState({ value: 'Other', isTouched: false });
    const [year, setYear] = useState({ value: userData.yob, isTouched: false });
    const [role, setRole] = useState({ value: userData.role, isTouched: false })

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 124 }, (_, i) => currentYear - i);
    const { theme } = useContext(ThemeContext);

    const handleSaveChanges = (e) => {
        e.preventDefault();
        const changedData = {
            firstName: username.value,
            email: email.value,
            password: password.value,
            address: address.value,
            role: role.value,
            yearOfBirth: year.value
        };

        localStorage.setItem(email.value, JSON.stringify(changedData));
        setUserData({ ...userData, name: username.value, email: email.value, password: password.value, address: address.value, role: role.value, yob: year.value });
        resetInputs();
        alert("Changes saved successfully!");
    };

    const isFormValid = () => {
        return (
            username.value &&
            password.value.length >= 8 &&
            validateEmail(email.value) &&
            address.value &&
            gender.value &&
            year.value !== "" &&
            role.value !== ""
        )
    };

    const isFormTouched = () => {
        return (
            username.isTouched ||
            password.isTouched ||
            email.isTouched ||
            phone.isTouched ||
            address.isTouched ||
            gender.isTouched ||
            year.isTouched ||
            role.isTouched
        )
    };

    function CheckForm() {
        if (isFormTouched()) {
            if (isFormValid()) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };

    const resetInputs = () => {
        setUsername({ ...username, isTouched: false })
        setPassword({ ...password, isTouched: false })
        setEmail({ ...email, isTouched: false })
        setPhone({ ...phone, isTouched: false })
        setAddress({ ...address, isTouched: false })
        setGender({ ...gender, isTouched: false })
        setYear({ ...year, isTouched: false })
        setRole({ ...role, isTouched: false })
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

    const getThemeStyle = () => {
        if (theme === 'light') {
            return {};
        }
        else {
            return {
                backgroundColor: theme === 'light' ? null : 'var(--darkGray)',
                border: theme === 'light' ? null : '1px solid var(--veryDarkGray)',
                color: theme === 'light' ? null : 'var(--white)'
            };
        }
    };

    return (
        <section className='settings-main-container'>
            <p className='pageHeader settings-pageHeader' style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }}>Settings</p>
            <form>
                <fieldset className='settings-fieldset' style={{ border: theme === 'light' ? null : '2px solid var(--darkGray)' }}>
                    <div className='settings-field'>
                        <label className='label-settings'>Username <sup className="sup-settings">*</sup></label>
                        <input
                            className='input-settings'
                            value={username.value}
                            onChange={(e) => { setUsername({ ...username, value: e.target.value, isTouched: true }) }}
                            placeholder='Username'
                            style={getThemeStyle()}></input>
                        {username.value.length < 2 ? <UsernameErrorMessage /> : null}
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Password <sup className="sup-settings">*</sup></label>
                        <input type='password'
                            className='input-settings'
                            value={password.value}
                            onChange={(e) => { setPassword({ ...password, value: e.target.value }); }}
                            onKeyUp={() => { validatePassword(password.value); }}
                            placeholder='Password'
                            style={getThemeStyle()}></input>
                        <div className='validation-message' style={{ color: validationMessage.includes('valid') ? '#34A853' : '#FF5252' }}>
                            {validationMessage}
                        </div>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>E-mail <sup className="sup-settings">*</sup></label>
                        <input
                            className='input-settings'
                            value={email.value}
                            onChange={(e) => { setEmail({ ...email, value: e.target.value, isTouched: true }) }}
                            placeholder='E-mail'
                            style={getThemeStyle()}></input>
                        {!validateEmail(email.value) ? <EmailErrorMessage /> : null}
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Address <sup className="sup-settings">*</sup></label>
                        <input
                            className='input-settings'
                            value={address.value}
                            onChange={(e) => { setAddress({ ...address, value: e.target.value, isTouched: true }) }}
                            placeholder='Address'
                            style={getThemeStyle()}></input>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Phone Number</label>
                        <input
                            className='input-settings'
                            value={phone.value}
                            onChange={(e) => { setPhone({ ...phone, value: e.target.value, isTouched: true }) }}
                            placeholder='Phone Number'
                            style={getThemeStyle()}></input>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Gender</label>
                        <select
                            className='input-settings'
                            value={gender.value}
                            style={getThemeStyle()}
                            onChange={(e) => { setGender({ ...gender, value: e.target.value, isTouched: true }) }}
                        >
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Year of Birth <sup className="sup-settings">*</sup></label>
                        <select className='input-settings' style={getThemeStyle()} value={year.value} onChange={(e) => { setYear({ ...year, value: e.target.value, isTouched: true }) }}>
                            <option value="">Select Year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Role <sup className="sup-settings">*</sup></label>
                        <select className='input-settings' style={getThemeStyle()} value={role.value} onChange={(e) => { setRole({ ...role, value: e.target.value, isTouched: true }) }}>
                            <option>Role</option>
                            <option>Individual</option>
                            <option>Business</option>
                        </select>
                    </div>
                    <button className='settings-button' type="submit" style={getThemeStyle()} disabled={!CheckForm()} onClick={handleSaveChanges}>Save Changes</button>
                </fieldset>
            </form>
        </section>
    )
};

export default ProfileSettings;