import './styles/CircleProfile.css';

function CircleProfile() {
    return (
        <>
            <p className='pageHeader'>Profile</p>
            <section className='profile-section'>
                <div className='circle'>
                    <button className="account">My Account</button>
                    <button className="orders">My Orders</button>
                    <button className="settings">Settings</button>
                    <button className="help">Help</button>
                </div>
                <div className='profile-image-center'>P</div>
            </section>
        </>
    )
};

export default CircleProfile;