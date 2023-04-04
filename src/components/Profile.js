import ".././styles/Profile.css"
import ProfileCategories from "./ProfileCategories";
import { useLocation } from 'react-router-dom';
import MyAccount from "./MyAccount";
import MyOrders from "./MyOrders";
import ProfileSettings from "./ProfileSettings";
import { useContext } from "react";
import { ThemeContext } from "./useTheme";

function Profile() {
    const location = useLocation();
    const isAccountPage = location.pathname.includes('/MyAccount.js');
    const isOrdersPage = location.pathname.includes('/MyOrders.js');
    const isSettingsPage = location.pathname.includes('/ProfileSettings.js');
    const { theme } = useContext(ThemeContext);
    return (
        <section className="profile-container">
            <div className='logout-container'>
                <p className='pageHeader' style={{
                    color: theme === 'light' ? 'var(--black)' : 'var(--white)'
                }} >Profile</p>
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