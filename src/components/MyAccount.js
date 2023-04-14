import Item from "./Item";
import '.././styles/MyAccount.css';
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./useTheme";


function MyAccount() {
    const { theme } = useContext(ThemeContext);
    const [recentProducts, setRecentProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=6');
            const data = await response.json();
            setRecentProducts(data);
        };
        fetchData();
    }, []);

    const recentlyViewed = recentProducts.map(item => {
        return (
            <div key={item.id}>
                <Item
                    id={item.id}
                    name={item.title}
                    price={item.price}
                    source={item.image}
                />
            </div>
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
                {/* <div className="orders">
                    <p>Recent Orders</p>
                    <div className="recentOrders" style={{
                        border: theme === 'light' ? null : 'var(--veryDarkGray)',
                        boxShadow: theme === 'light' ? null : '0px 0px 5px var(--darkGray)'
                    }}>
                        <p>na antikatastisw to recent orders me kati allo</p>
                    </div>
                </div> */}

            </div>
        </section>
    )
};

export default MyAccount;