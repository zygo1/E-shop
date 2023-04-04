import '.././styles/MyOrders.css';
import myData from '../data/myOrders.json';
import Order from "./Order";
import xiaomi_redmi_note11s from '.././assets/xiaomi_redmi_note11s.jpeg';
import sony_xperia_1_iv from '.././assets/sony_xperia_1_iv.jpeg';
import { useContext } from 'react';
import { ThemeContext } from './useTheme';

function MyOrders() {
    const { theme } = useContext(ThemeContext);

    const orderList = myData.myOrders.map(item => {
        return (
            <Order
                orderNumber={item.orderNumber}
                address={item.address}
                name={item.name}
                source={require(`.././${item.img_path}`)}
            />
        )
    })
    {/* <Order img={xiaomi_redmi_note11s} name={"Xiaomi Redmi Note 11s"} orderNumber={17321639391283712} address={"Thessaloniki, Greece"} /> */ }
    return (
        <section className="orders-container">
            <p className='pageHeader orders-pageHeader' style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }}>Orders</p>
            {orderList.length > 0 ? orderList : <p>You don't have any orders yet.</p>}
        </section>
    )
};

export default MyOrders;