import React, { useContext } from 'react';
import { AddItemContext } from './useCart';
import '.././styles/ItemCart.css';

function Item(props) {
    const { handleAddClick, handleRemoveClick, addItem, removeItem } = useContext(AddItemContext);

    return (
        <div className='item-container'>
            <img className='cart-image' src={require(`.././${props.altsource}`)} alt="" />
            <div className='cart-description'>
                <p>{props.name}</p>
                <p>Price: {props.price} €</p>
                <div className='quantity'>
                    <button onClick={() => {
                        removeItem();
                        handleRemoveClick(props.id, props.name, props.price, props.source, 1, props.altsource)
                    }}>-</button>
                    <p>{props.quantity}</p>
                    <button onClick={() => {
                        addItem(props.id);
                        handleAddClick(props.id, props.name, props.price, props.source, 1, props.altsource);
                    }}>+</button>
                </div>
            </div>

        </div>
    );
}

export default Item;
