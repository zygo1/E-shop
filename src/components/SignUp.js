import ".././styles/SignUp.css";
import { useState } from "react";
import { validateEmail } from "./validemail";
import { Link } from "react-router-dom";


const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
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

    const getIsFormValid = () => {
        return (
            firstName &&
            validateEmail(email) &&
            password.value.length >= 8 &&
            role !== "role"
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
                                First name <sup>*</sup>
                            </label>
                            <input className="input-signup" placeholder="First name" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                        </div>
                        <div className="Field">
                            <label className="label-signup">Last name</label>
                            <input className="input-signup" placeholder="Last name" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                        </div>
                        <div className="Field">
                            <label className="label-signup">
                                Email address <sup>*</sup>
                            </label>
                            <input className="input-signup" placeholder="Email address" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="Field">
                            <label className="label-signup">
                                Password <sup>*</sup>
                            </label>
                            <input className="input-signup" placeholder="Password" type="password" value={password.value}
                                onChange={(e) => { setPassword({ ...password, value: e.target.value }); }}
                                onBlur={() => { setPassword({ ...password, isTouched: true }); }} />
                            {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage />) : null}
                        </div>
                        <div className="Field">
                            <label className="label-signup">
                                Role <sup>*</sup>
                            </label>
                            <select className="input-signup" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option value="role">Role</option>
                                <option value="individual">Individual</option>
                                <option value="business">Business</option>
                            </select>
                        </div>
                        <Link to="/"><button className="button-signup" type="submit" disabled={!getIsFormValid()}>
                            Create account
                        </button></Link>
                        <div className="sign-in">
                            <p>Do you have already and account? <span>Sign in!</span></p>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}

export default SignUp;
