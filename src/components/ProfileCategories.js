import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import profileimg from '.././assets/user.svg';
import order from '.././assets/order.svg';
import settings from '.././assets/settings.svg';
import help from '.././assets/help.svg';

function ProfileCategories() {
    const navigate = useNavigate();

    return (
        <nav className="categoriesProfile">
            <ul>
                <li onClick={() => { navigate("/Profile.js/MyAccount.js") }} className='profile-categ-items'><img src={profileimg} /><Link to="/Profile.js/MyAccount.js">My account</Link></li>
                <li onClick={() => { navigate("/Profile.js/MyOrders.js") }} className='profile-categ-items'><img src={order} /><Link to="/Profile.js/MyOrders.js">Orders</Link></li>
                <li onClick={() => { navigate("/Profile.js/ProfileSettings.js") }} className='profile-categ-items'><img src={settings} /><Link to="/Profile.js/ProfileSettings.js">Settings</Link></li>
                <li onClick={() => { navigate("/Contact.js") }} className='profile-categ-items'><img src={help} /><Link to="/Contact.js">Help</Link></li>
            </ul>
        </nav>
    )
};

export default ProfileCategories;