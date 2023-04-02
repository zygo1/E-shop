import Item from "./Item";
import '.././styles/MyAccount.css';
import recentlyViewedData from '../data/recentlyViewed.json'
import { useContext } from "react";
import { ThemeContext } from "./useTheme";


function MyAccount() {
    const { theme } = useContext(ThemeContext);

    const recentlyViewed = recentlyViewedData.views.map(item => {
        return (
            <Item
                key={item.id}
                id={item.id}
                name={item.description}
                price={item.price}
                altsource={item.img_path}
                source={require(`.././${item.img_path}`)}
            />
        )
    })

    return (
        <section>
            <div className="accountContainer">
                <div className="recentViews" style={{
                    border: theme === 'light' ? null : 'var(--veryDarkGray)',
                    boxShadow: theme === 'light' ? null : '0px 0px 5px var(--darkGray)'
                }}>
                    <p>Recently Viewed</p>
                    <div className="recentItems">
                        {recentlyViewed}
                    </div>
                </div>
                <div className="recentOrders" style={{
                    border: theme === 'light' ? null : 'var(--veryDarkGray)',
                    boxShadow: theme === 'light' ? null : '0px 0px 5px var(--darkGray)'
                }}>
                    <p>Recent Orders</p>
                    <p>There aren't any orders yet.</p>
                </div>
            </div>
        </section>
    )
};

export default MyAccount;