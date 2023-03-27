import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import profileimg from '.././assets/user.svg';
import order from '.././assets/order.svg';
import settings from '.././assets/settings.svg';
import help from '.././assets/help.svg';

function ProfileCategories() {
    const navigate = useNavigate();

    const profileRef = useRef();
    const toggleProfileCategories = () => {
        profileRef.current.classList.toggle('responsive-categories');
    }

    const hideProfileCategories = () => {
        profileRef.current.classList.remove('responsive-categories');
    }

    return (
        <div className='profile-categories-container'>
            <button onClick={toggleProfileCategories} className="open-categories profile-categ categ-btn">
                Options
            </button>
            <nav className="categoriesProfile" ref={profileRef}>
                <ul>
                    <li onClick={() => {
                        navigate("/Profile.js/MyAccount.js");
                        hideProfileCategories();
                    }}
                        className='profile-categ-items'>
                        <img src={profileimg} /><Link to="/Profile.js/MyAccount.js">My account</Link>
                    </li>
                    <li onClick={() => {
                        navigate("/Profile.js/MyOrders.js")
                        hideProfileCategories();
                    }}
                        className='profile-categ-items'>
                        <img src={order} /><Link to="/Profile.js/MyOrders.js">Orders</Link>
                    </li>
                    <li onClick={() => {
                        navigate("/Profile.js/ProfileSettings.js")
                        hideProfileCategories();
                    }}
                        className='profile-categ-items'>
                        <img src={settings} /><Link to="/Profile.js/ProfileSettings.js">Settings</Link>
                    </li>
                    <li onClick={() => {
                        navigate("/Contact.js")
                        hideProfileCategories();
                    }}
                        className='profile-categ-items'>
                        <img src={help} /><Link to="/Contact.js">Help / Contact</Link>
                    </li>
                </ul>
                <button onClick={toggleProfileCategories} className="close-categories categ-btn"><FaTimes /></button>
            </nav>
        </div>

    )
};

export default ProfileCategories;