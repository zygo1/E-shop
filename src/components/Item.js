import React from 'react';
import ".././styles/Items.css";

function Item(props) {
    return (
        <div className="item">
            <img id='phone' src={props.img} alt="" />
            <p>{props.description}</p>
            <p>Price: {props.price} €</p>
            <button>Add to Cart</button>
        </div>
    )
};

export default Item;