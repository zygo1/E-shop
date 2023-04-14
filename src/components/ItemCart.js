import React, { useContext } from 'react';
import { AddItemContext } from './useCart';
import '.././styles/ItemCart.css';
import { ThemeContext } from './useTheme';

function Item(props) {
    const { handleAddClick, handleRemoveClick, addItem, removeItem } = useContext(AddItemContext);
    const { theme } = useContext(ThemeContext);
    console.log(props.source);
    return (
        <div className='item-container' style={{
            backgroundColor: theme === 'light' ? 'var(--itemColor)' : 'var(--darkGray)',
            boxShadow: theme === 'light' ? '0px 0px 3px rgb(104, 104, 104)' : 'none'
        }}>
            <img className='cart-image' src={props.source} alt="" />
            <div className='cart-description'>
                <p>{props.name}</p>
                <p>Price: {props.price} €</p>
                <div className='quantity'>
                    <button onClick={() => {
                        removeItem();
                        handleRemoveClick(props.id, props.name, props.price, props.source, 1)
                    }}>-</button>
                    <p>{props.quantity}</p>
                    <button onClick={() => {
                        addItem(props.id);
                        handleAddClick(props.id, props.name, props.price, props.source, 1);
                    }}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Item;
