import React, { useContext } from 'react';
import { AddItemContext } from './useAuth';
import '.././styles/ItemCart.css';

function Item(props) {
    // const { addItem } = useContext(AddItemContext);

    return (
        <div className="itemCart">
            {/* <img id='phone' src={props.source} alt="" /> */}
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
