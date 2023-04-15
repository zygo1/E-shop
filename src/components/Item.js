import React, { useContext, useState } from 'react';
import ".././styles/Items.css";
import { AddItemContext } from './useCart';
import { ThemeContext } from './useTheme';
import ModalItems from './Modal-Items'

function Item(props) {
    const { addItem, handleAddClick } = useContext(AddItemContext);
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className="item" onClick={() => {
                setIsOpen(true);
            }} style={{
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
            <ModalItems
                open={isOpen}
                onClose={() => { setIsOpen(false) }}>
                hello world
            </ModalItems>
        </>


    );
}

export default Item;
