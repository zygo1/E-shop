import "../.././styles/SignUp.css";
import { useContext, useState } from "react";
import { validateEmail } from "../ValidateEmail";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from '.././useTheme';


export const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters.</p>
    );
};

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [role, setRole] = useState("role");
    const [year, setYear] = useState('');

    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

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
            validateEmail(email) &&
            password.value.length >= 8 &&
            role !== "role" &&
            year !== ""
        );
    };

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({ value: "", isTouched: false });
        setRole("role");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password.value,
            role: role,
            yearOfBirth: year
        };

        if (localStorage.getItem(email) === null) {
            localStorage.setItem(email, JSON.stringify(newUser));
        }
        clearForm();
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
                                Email address <sup className="sup-signup">*</sup>
                            </label>
                            <input className="input-signup" placeholder="Email address" style={INPUT_STYLES} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="Field">
                            <label className="label-signup">
                                Password <sup className="sup-signup">*</sup>
                            </label>
                            <input className="input-signup" placeholder="Password" type="password" style={INPUT_STYLES} value={password.value}
                                onChange={(e) => { setPassword({ ...password, value: e.target.value }); }}
                                onBlur={() => { setPassword({ ...password, isTouched: true }); }} />
                            {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage />) : null}
                        </div>
                        <div className="Field">
                            <label className="label-signup">
                                Role <sup className="sup-signup">*</sup>
                            </label>
                            <select className="input-signup" value={role} style={INPUT_STYLES} onChange={(e) => setRole(e.target.value)}>
                                <option value="role">Role</option>
                                <option value="individual">Individual</option>
                                <option value="business">Business</option>
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
                            <p>Do you have already and account? <span onClick={() => { navigate('/'); }}>Login</span></p>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}

export default SignUp;
