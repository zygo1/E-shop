import React from 'react';
import ".././styles/Items.css";

function Item(props) {
    return (
        <div className="item">
            <img id='phone' src={props.source} alt="" />
            <p>{props.name}</p>
            <p>Price: {props.price} €</p>
            <button>Add to Cart</button>
        </div>
    )
};

export default Item;