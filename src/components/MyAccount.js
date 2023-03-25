import Item from "./Item";
import '.././styles/MyAccount.css';
import recentlyViewedData from '.././data/recentlyViewed.json'
import ProfileCategories from "./ProfileCategories";
import samsung_galaxy_s23 from '.././assets/samsung_galaxy_s23.jpeg';
import sony_xperia_1_iv from '.././assets/sony_xperia_1_iv.jpeg';
import sony_xperia_10_iv from '.././assets/sony_xperia_10_iv.jpeg';
import xiaomi_poco_x5_pro from '.././assets/xiaomi_poco_x5_pro.jpeg';
import xiaomi_redmi_note11s from '.././assets/xiaomi_redmi_note11s.jpeg';

function MyAccount() {
    const recentlyViewed = recentlyViewedData.views.map(item => {
        return (
            <Item
                key={item.id}
                name={item.description}
                price={item.price}
                source={require(`.././${item.img_path}`)}
            />
        )
    })

    return (
        <section>
            <p className='pageHeader profileHeader'>My Account</p>
            <div className="accountContainer">
                <div className="recentViews">
                    <p>Recently Viewed</p>
                    <div className="recentItems">
                        {recentlyViewed}
                    </div>
                </div>
                <div className="recentOrders">
                    <p>Recent Orders</p>
                    <p>There aren't any orders yet.</p>
                </div>
            </div>
        </section>
    )
};

export default MyAccount;