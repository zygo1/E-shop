import placeholder from '.././assets/placeholder.svg';
import cart from '.././assets/shoppingcart.svg';
import "./styles/Items.css";

function Item() {
    return (
        <div className="item">
            <img src={placeholder} alt="" />
            <p>Item 1</p>
            <p>Price: 13.50</p>
            <button>Add to Cart<img src={cart} className="addToCart" /></button>
        </div>
    )
};

export default Item;