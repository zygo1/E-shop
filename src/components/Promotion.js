import shopping from '.././assets/web_shopping.svg';
import ".././styles/Promotion.css";
import { Link } from 'react-router-dom';

function Promotion() {
    return (
        <section className="promotion">
            <img src={shopping} alt=""></img>
            <div>Transform any space into an oasis you can be proud of!</div>
            <Link to='/Profile.js/MyAccount.js'><button className="order-button">Order online!</button></Link>
        </section >
    )
};

export default Promotion;