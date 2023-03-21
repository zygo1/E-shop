import './styles/CircleProfile.css';
import { Link } from 'react-router-dom';

function CircleProfile() {
    return (
        <>
            <p className='pageHeader'>Profile</p>
            <section className='profile-section'>
                <div className='circle'>
                    <Link to="/MyAccount.js"><button className="account">My Account</button></Link>
                    <Link to="/MyOrders.js"><button className="orders">My Orders</button></Link>
                    <Link to="/ProfileSettings.js"><button className="settings">Settings</button></Link>
                    <Link to="/Contact.js"><button className="help">Help</button></Link>
                </div>
                <div className='profile-image-center'>P</div>
            </section>
        </>
    )
};

export default CircleProfile;