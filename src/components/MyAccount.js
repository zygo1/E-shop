import Item from "./Item";
import '.././styles/MyAccount.css';
import samsung_galaxy_s23 from '.././assets/samsung_galaxy_s23.jpeg';
import sony_xperia_1_iv from '.././assets/sony_xperia_1_iv.jpeg';
import sony_xperia_10_iv from '.././assets/sony_xperia_10_iv.jpeg';
import xiaomi_poco_x5_pro from '.././assets/xiaomi_poco_x5_pro.jpeg';
import xiaomi_redmi_note11s from '.././assets/xiaomi_redmi_note11s.jpeg';

function MyAccount() {
    return (
        <section>
            <p className='pageHeader profileHeader'>My Account</p>
            <div className="accountContainer">
                <div className="recentOrders">
                    <p>Recent Orders</p>
                    <p>There aren't any orders yet.</p>
                </div>
                <div className="recentViews">
                    <p>Recently Viewed</p>
                    <div className="recentItems">
                        <Item
                            description={'Xiaomi Redmi Note 11S NFC Dual SIM (6GB/64GB)'}
                            price={'199.40'}
                            img={xiaomi_redmi_note11s}
                        />
                        <Item
                            description={'Samsung Galaxy S23 Ultra 5G Dual SIM (8GB/256GB)'}
                            price={'1189.99'}
                            img={samsung_galaxy_s23}
                        />
                        <Item
                            description={'Xiaomi Poco X5 Pro 5G Dual SIM (8GB/256GB)'}
                            price={'374.99'}
                            img={xiaomi_poco_x5_pro}
                        />
                        <Item
                            description={'Sony Xperia 1 IV 5G Dual SIM (12GB/256GB)'}
                            price={'1159.99'}
                            img={sony_xperia_1_iv}
                        />
                        <Item
                            description={'Sony Xperia 10 IV 5G Dual SIM (6GB/128GB)'}
                            price={'369.99'}
                            img={sony_xperia_10_iv}
                        />
                        <Item
                            description={'Xiaomi Poco X5 Pro 5G Dual SIM (8GB/256GB)'}
                            price={'374.99'}
                            img={xiaomi_poco_x5_pro}
                        />
                        <Item
                            description={'Sony Xperia 1 IV 5G Dual SIM (12GB/256GB)'}
                            price={'1159.99'}
                            img={sony_xperia_1_iv}
                        />
                        <Item
                            description={'Xiaomi Redmi Note 11S NFC Dual SIM (6GB/64GB)'}
                            price={'199.40'}
                            img={xiaomi_redmi_note11s}
                        />
                        <Item
                            description={'Samsung Galaxy S23 Ultra 5G Dual SIM (8GB/256GB)'}
                            price={'1189.99'}
                            img={samsung_galaxy_s23}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default MyAccount;