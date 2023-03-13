import profileimg from '.././assets/user.svg';
import order from '.././assets/order.svg';
import settings from '.././assets/settings.svg';
import help from '.././assets/help.svg';

function ProfileCategories() {
    return (
        <nav className="categoriesProfile">
            <ul>
                <li><img src={profileimg} />My account</li>
                <li><img src={order} />Orders</li>
                <li><img src={settings} />Settings</li>
                <li><img src={help} />Help</li>
            </ul>
        </nav>
    )
};

export default ProfileCategories;