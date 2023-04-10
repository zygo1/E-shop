import "../.././styles/SignUp.css";
import { useState } from "react";
import { validateEmail } from "../ValidateEmail";
import { Link, useNavigate } from "react-router-dom";


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
        alert("Account created!");
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
                            <input className="input-signup" placeholder="First name" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                        </div>
                        <div className="Field">
                            <label className="label-signup">Last name</label>
                            <input className="input-signup" placeholder="Last name" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                        </div>
                        <div className="Field">
                            <label className="label-signup">
                                Email address <sup className="sup-signup">*</sup>
                            </label>
                            <input className="input-signup" placeholder="Email address" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="Field">
                            <label className="label-signup">
                                Password <sup className="sup-signup">*</sup>
                            </label>
                            <input className="input-signup" placeholder="Password" type="password" value={password.value}
                                onChange={(e) => { setPassword({ ...password, value: e.target.value }); }}
                                onBlur={() => { setPassword({ ...password, isTouched: true }); }} />
                            {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage />) : null}
                        </div>
                        <div className="Field">
                            <label className="label-signup">
                                Role <sup className="sup-signup">*</sup>
                            </label>
                            <select className="input-signup" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="role">Role</option>
                                <option value="individual">Individual</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                        <div className='Field'>
                            <label className='label-signup'>Year of Birth</label>
                            <select className='input-signup' value={year} onChange={handleYearChange}>
                                <option value="">Select Year</option>
                                {years.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <Link to="/"><button className="button-signup" type="submit" disabled={!getIsFormValid()}>
                            Create account
                        </button></Link>
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
