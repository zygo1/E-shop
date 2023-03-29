import React, { useContext, useState } from 'react';
import ".././styles/Items.css";
import { AddItemContext } from './useAuth';

function Item(props) {
    const { addItem, handleClick } = useContext(AddItemContext);

    return (
        <div className="item">
            <img src={props.source} alt="" />
            <p>{props.name}</p>
            <p>Price: {props.price} €</p>
            <button onClick={() => {
                addItem(props.id);
                handleClick(props.id, props.name, props.price, props.source, 1, props.altsource);
            }}>
                Add to Cart</button>
        </div>
    );
}

export default Item;
