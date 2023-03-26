import Item from "./Item";
import '.././styles/MyAccount.css';
import recentlyViewedData from '.././data/recentlyViewed.json'


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