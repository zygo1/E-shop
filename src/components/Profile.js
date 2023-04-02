import ".././styles/Profile.css"
import ProfileCategories from "./ProfileCategories";
import { useLocation } from 'react-router-dom';
import MyAccount from "./MyAccount";
import MyOrders from "./MyOrders";
import ProfileSettings from "./ProfileSettings";

function Profile() {
    const location = useLocation();
    const isAccountPage = location.pathname.includes('/MyAccount.js');
    const isOrdersPage = location.pathname.includes('/MyOrders.js');
    const isSettingsPage = location.pathname.includes('/ProfileSettings.js');
    return (
        <section className="profile-container">
            <div className='logout-container'>
                <p className='pageHeader'>Profile</p>
            </div>
            <div className="profile-account-container">
                <ProfileCategories />
                {isAccountPage && <MyAccount />}
                {isOrdersPage && <MyOrders />}
                {isSettingsPage && <ProfileSettings />}
            </div>

        </section>

    )
}

export default Profile;