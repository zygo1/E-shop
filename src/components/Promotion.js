import shopping from '.././assets/web_shopping.svg';
import ".././styles/Promotion.css";

function Promotion() {
    return (
        <section className="promotion">
            <img src={shopping} alt=""></img>
            <div>Transform any space into an oasis you can be proud of!</div>
            <button className="order-button">Order online!</button>
        </section >
    )
};

export default Promotion;