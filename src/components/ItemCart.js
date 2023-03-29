import React, { useContext } from 'react';
import { AddItemContext } from './useAuth';
import '.././styles/ItemCart.css';

function Item(props) {
    return (
        <div className="itemCart">
            <img className='cart-image' src={require(`.././${props.altsource}`)} alt="" />
            <p>{props.name}</p>
            <p>Price: {props.price} €</p>
            <div className='quantity'>
                <button>-</button>
                <p>{props.quantity}</p>
                <button>+</button>
            </div>
        </div>
    );
}

export default Item;
