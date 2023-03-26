import '.././styles/MyOrders.css';
import Order from "./Order";
import xiaomi_redmi_note11s from '.././assets/xiaomi_redmi_note11s.jpeg';
import sony_xperia_1_iv from '.././assets/sony_xperia_1_iv.jpeg';

function MyOrders() {
    return (
        <section className="orders-container">
            <p className='pageHeader orders-pageHeader'>Orders</p>
            <Order img={xiaomi_redmi_note11s} name={"Xiaomi Redmi Note 11s"} orderNumber={17321639391283712} address={"Thessaloniki, Greece"} />
            <Order img={sony_xperia_1_iv} name={"Sony Xperia 1 IV"} orderNumber={18549633259172922} address={"Athens, Greece"} />
        </section>
    )
};

export default MyOrders;