import React, { useContext } from 'react';
import ".././styles/Items.css";
import { AddItemContext } from './useCart';
import { ThemeContext } from './useTheme';

function Item(props) {
    const { addItem, handleAddClick } = useContext(AddItemContext);

    const { theme } = useContext(ThemeContext);

    return (
        <div className="item" style={{
            backgroundColor: theme === 'light' ? 'var(--itemColor)' : 'var(--darkGray)',
            boxShadow: theme === 'light' ? '0px 0px 3px rgb(104, 104, 104)' : 'none'
        }}>
            <img src={props.source} alt="" />
            <p>{props.name}</p>
            <p>Price: {props.price} €</p>
            <button onClick={() => {
                addItem(props.id);
                handleAddClick(props.id, props.name, props.price, props.source, 1);
            }}>
                Add to Cart</button>
        </div>
    );
}

export default Item;
