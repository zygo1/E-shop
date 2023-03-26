import '.././styles/Settings.css';
import { useState } from 'react';


function ProfileSettings() {
    const [year, setYear] = useState('');
    const handleYearChange = (event) => {
        setYear(event.target.value);
    };
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 124 }, (_, i) => currentYear - i);

    return (
        <section className='settings-main-container'>
            <p className='pageHeader settings-pageHeader'>Settings</p>
            <form>
                <fieldset className='settings-fieldset'>
                    <div className='settings-field'>
                        <label className='label-settings'>Username</label>
                        <input className='input-settings' placeholder='Username'></input>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Password</label>
                        <input className='input-settings' placeholder='Password'></input>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>E-mail</label>
                        <input className='input-settings' placeholder='E-mail'></input>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Phone Number</label>
                        <input className='input-settings' placeholder='Phone Number'></input>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Address</label>
                        <input className='input-settings' placeholder='Address'></input>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Gender</label>
                        <select className='input-settings'>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className='settings-field'>
                        <label className='label-settings'>Year of Birth</label>
                        <select className='input-settings' value={year} onChange={handleYearChange}>
                            <option value="">Select Year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className='settings-button' type="submit">Save Changes</button>
                </fieldset>
            </form>
        </section>

    )
};

export default ProfileSettings;