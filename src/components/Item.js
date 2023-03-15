import placeholder from '.././assets/placeholder.svg';
import "./styles/Items.css";

function Item() {
    return (
        <div className="item">
            <img src={placeholder} alt="" />
            <p>Item 1</p>
            <p>Small Description</p>
            <p>Price: 13.50</p>
            <button>Add to Cart</button>
        </div>
    )
};

export default Item;