import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import profileimg from '.././assets/user.svg';
import order from '.././assets/order.svg';
import logoutImg from '.././assets/exit.svg';
import settings from '.././assets/settings.svg';
import help from '.././assets/help.svg';
import { ThemeContext } from './useTheme';
import { AuthContext } from './useAuth';

function ProfileCategories() {
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const { logout } = useContext(AuthContext);

    const profileRef = useRef();
    const toggleProfileCategories = () => {
        profileRef.current.classList.toggle('responsive-categories');
    };

    const hideProfileCategories = () => {
        profileRef.current.classList.remove('responsive-categories');
    };

    return (
        <div className='profile-categories-container' >
            <button onClick={toggleProfileCategories} className="open-categories profile-categ categ-btn" style={{
                color: theme === 'light' ? 'var(--black)' : 'var(--white)',
                backgroundColor: theme === 'light' ? 'var(--secondary)' : 'var(--darkGray)'
            }}>
                Options
            </button>
            <nav className="categoriesProfile" ref={profileRef} style={{ backgroundColor: theme === 'light' ? 'var(--white)' : 'var(--darkGray)', boxShadow: theme === 'light' ? null : 'none' }}>
                <ul >
                    <li onClick={() => {
                        navigate("/Profile.js/MyAccount.js");
                        hideProfileCategories();
                    }}
                        className='profile-categ-items'>
                        <img style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} src={profileimg} />
                        <Link style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }} to="/Profile.js/MyAccount.js">My account</Link>
                    </li>
                    <li onClick={() => {
                        navigate("/Profile.js/MyOrders.js")
                        hideProfileCategories();
                    }}
                        className='profile-categ-items'>
                        <img style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} src={order} />
                        <Link style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }} to="/Profile.js/MyOrders.js">Orders</Link>
                    </li>
                    <li onClick={() => {
                        navigate("/Profile.js/ProfileSettings.js")
                        hideProfileCategories();
                    }}
                        className='profile-categ-items'>
                        <img style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} src={settings} />
                        <Link style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }} to="/Profile.js/ProfileSettings.js">Settings</Link>
                    </li>
                    <li onClick={() => {
                        navigate("/Contact.js");
                        hideProfileCategories();
                    }}
                        className='profile-categ-items'>
                        <img style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} src={help} />
                        <Link style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }} to="/Contact.js">Help</Link>
                    </li>
                    <li onClick={() => { navigate('/Login.js'); hideProfileCategories(); }} className='profile-categ-items'>
                        <img style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} src={logoutImg} />
                        <Link style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }} to={'/Login.js'} onClick={() => { logout() }} className='logout-button'>Logout</Link>
                    </li>
                </ul>
                <button onClick={toggleProfileCategories} className="close-categories categ-btn" style={{
                    color: theme === 'light' ? 'var(--black)' : 'var(--white)'
                }} ><FaTimes /></button>
            </nav>
        </div >

    )
};

export default ProfileCategories;