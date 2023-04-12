import ".././styles/Profile.css"
import ProfileCategories from "./ProfileCategories";
import signInIcon from '.././assets/loggedout.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import MyAccount from "./MyAccount";
import MyOrders from "./MyOrders";
import ProfileSettings from "./ProfileSettings";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./useTheme";
import { AuthContext } from "./useAuth";




function Profile() {
    const location = useLocation();
    const isAccountPage = location.pathname.includes('/MyAccount.js');
    const isOrdersPage = location.pathname.includes('/MyOrders.js');
    const isSettingsPage = location.pathname.includes('/ProfileSettings.js');


    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const { userData, isAuthenticated } = useContext(AuthContext);

    let storedUser, user;
    if (localStorage.getItem(userData.email) !== null) {
        storedUser = localStorage.getItem(userData.email);
        user = JSON.parse(storedUser);
    };

    function firstLetterUpperCase(str) {
        return (str).charAt(0).toUpperCase() + (str).slice(1)
    };

    const HEADER_STYLES = {
        color: theme === 'light' ? 'var(--black)' : 'var(--white)'
    };

    if (!isAuthenticated) {
        return (
            <section className="signed-out">
                <div>Oops! Looks like you need to log in to see your profile. Please log in or create an account to continue.</div>
                <button onClick={() => { navigate('/Login.js') }}>Login</button>
                <img src={signInIcon} />
            </section>
        )
    }





    return (
        <section className="profile-container">
            <div className='username-container'>
                <p className='pageHeader' style={HEADER_STYLES} >Hello {user !== undefined ? firstLetterUpperCase(user.firstName) + '!' : "Guest"}</p>
            </div>
            <div className="profile-account-container">
                <div className="profile-categories-wrapper">
                    <ProfileCategories />
                </div>
                {isAccountPage && <MyAccount />}
                {isOrdersPage && <MyOrders />}
                {isSettingsPage && <ProfileSettings />}
            </div>
        </section>

    )
}

export default Profile;