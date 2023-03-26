import '.././styles/Settings.css';
import { useState } from 'react';
import { validateEmail } from './validemail';


function ProfileSettings() {
    const [username, setUsername] = useState({ value: 'Jane5', isTouched: false });
    const [password, setPassword] = useState({ value: 1234567890, isTouched: false });
    const [email, setEmail] = useState({ value: 'Jane5@gmail.com', isTouched: false });
    const [phone, setPhone] = useState({ value: 6912345678, isTouched: false });
    const [address, setAddress] = useState({ value: 'Thessaloniki 2', isTouched: false });
    const [gender, setGender] = useState({ value: 'Female', isTouched: false });
    const [year, setYear] = useState({ value: 1980, isTouched: false });

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 124 }, (_, i) => currentYear - i);

    const handleSaveChanges = (e) => {
        e.preventDefault();
        resetInputs();
        alert("Changes saved successfully!")
    }

    const isFormTouched = () => {
        return (
            username.isTouched ||
            password.isTouched ||
            email.isTouched ||
            phone.isTouched ||
            address.isTouched ||
            gender.isTouched ||
            year.isTouched
        )
    }

    const resetInputs = () => {
        setUsername({ ...username, isTouched: false })
        setPassword({ ...password, isTouched: false })
        setEmail({ ...email, isTouched: false })
        setPhone({ ...phone, isTouched: false })
        setAddress({ ...address, isTouched: false })
        setGender({ ...gender, isTouched: false })
        setYear({ ...year, isTouched: false })
    }

    return (
        <section className='settings-main-container'>
            <p className='pageHeader settings-pageHeader'>Settings</p>
            <form>
                <fieldset className='settings-fieldset'>
                    <div className='settings-field'>
                        <label className='label-settings'>Username</label>
                        <input
                            className='input-settings'
                            value={username.value}
                            onChange={(e) => { setUsername({ ...username, value: e.target.value, isTouched: true }) }}
                            // onBlur={() => { setUsername({ ...username, isTouched: true }) }}
                            placeholder='Username'></input>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Password</label>
                        <input type='password'
                            className='input-settings'
                            value={password.value}
                            onChange={(e) => { setPassword({ ...password, value: e.target.value, isTouched: true }) }}
                            // onBlur={() => { setPassword({ ...password, isTouched: true }) }}
                            placeholder='Password'></input>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>E-mail</label>
                        <input
                            className='input-settings'
                            value={email.value}
                            onChange={(e) => { setEmail({ ...email, value: e.target.value, isTouched: true }) }}
                            // onBlur={() => { setEmail({ ...email, isTouched: true }) }}
                            placeholder='E-mail'></input>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Phone Number</label>
                        <input
                            className='input-settings'
                            value={phone.value}
                            onChange={(e) => { setPhone({ ...phone, value: e.target.value, isTouched: true }) }}
                            // onBlur={() => { setPhone({ ...phone, isTouched: true }) }}
                            placeholder='Phone Number'></input>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Address</label>
                        <input
                            className='input-settings'
                            value={address.value}
                            onChange={(e) => { setAddress({ ...address, value: e.target.value, isTouched: true }) }}
                            // onBlur={() => { setAddress({ ...address, isTouched: true }) }}
                            placeholder='Address'></input>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Gender</label>
                        <select
                            className='input-settings'
                            value={gender.value}
                            onChange={(e) => { setGender({ ...gender, value: e.target.value, isTouched: true }) }}
                        // onBlur={() => { setGender({ ...gender, isTouched: true }) }}
                        >
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Year of Birth</label>
                        <select className='input-settings' value={year.value} onChange={(e) => { setYear({ ...year, value: e.target.value, isTouched: true }) }}>
                            <option value="">Select Year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className='settings-button' type="submit" disabled={!isFormTouched()} onClick={handleSaveChanges}>Save Changes</button>
                </fieldset>
            </form>
        </section>

    )
};

export default ProfileSettings;