import ".././styles/Profile.css"
import ProfileCategories from "./ProfileCategories";
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <>
            <div className='logout-container'>
                <p className='pageHeader'>Profile</p>
                <Link to="/SignUp.js"><button className='logout'>Logout</button></Link>
            </div>
            <ProfileCategories />
        </>

    )
}

export default Profile;