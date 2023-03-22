import './styles/CircleProfile.css';
import { Link } from 'react-router-dom';

function CircleProfile() {
    return (
        <>
            <p className='pageHeader'>Profile</p>
            <section className='profile-section'>
                <div className='circle'>
                    <Link to="/Profile.js/MyAccount.js"><button className="account">My Account</button></Link>
                    <Link to="/Profile.js/MyOrders.js"><button className="orders">My Orders</button></Link>
                    <Link to="/Profile.js/ProfileSettings.js"><button className="settings">Settings</button></Link>
                    <Link to="/Profile.js/Contact.js"><button className="help">Help</button></Link>
                </div>
                <div className='profile-image-center'>P</div>
            </section>
        </>
    )
};

export default CircleProfile;