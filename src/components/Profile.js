import ".././styles/Profile.css"
import ProfileCategories from "./ProfileCategories";
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import MyAccount from "./MyAccount";
import MyOrders from "./MyOrders";
import ProfileSettings from "./ProfileSettings";

function Profile() {
    const location = useLocation();
    const isProfilePage = location.pathname.includes('/Profile.js');
    const isAccountPage = location.pathname.includes('/MyAccount.js');
    const isOrdersPage = location.pathname.includes('/MyOrders.js');
    const isSettingsPage = location.pathname.includes('/ProfileSettings.js');
    return (
        <>
            <div className='logout-container'>
                <p className='pageHeader'>Profile</p>
                <Link to="/SignUp.js"><button className='logout'>Logout</button></Link>
            </div>
            <div className="profile-account-container">
                <ProfileCategories />
                {isAccountPage && <MyAccount />}
                {isOrdersPage && <MyOrders />}
                {isSettingsPage && <ProfileSettings />}
            </div>

        </>

    )
}

export default Profile;