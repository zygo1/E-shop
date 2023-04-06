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
                name={item.name}
                price={item.price}
                altsource={item.img_path}
                source={require(`.././${item.img_path}`)}
            />
        )
    })

    return (
        <section>
            <div className="accountContainer">
                <div className="views">
                    <p>Recently Viewed</p>
                    <div className="recentViews" style={{
                        border: theme === 'light' ? null : 'var(--veryDarkGray)',
                        boxShadow: theme === 'light' ? null : '0px 0px 5px var(--darkGray)'
                    }}>
                        <div className="recentItems">
                            {recentlyViewed}
                        </div>
                    </div>
                </div>
                <div className="orders">
                    <p>Recent Orders</p>
                    <div className="recentOrders" style={{
                        border: theme === 'light' ? null : 'var(--veryDarkGray)',
                        boxShadow: theme === 'light' ? null : '0px 0px 5px var(--darkGray)'
                    }}>
                        <p>na antikatastisw to recent orders me kati allo</p>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default MyAccount;