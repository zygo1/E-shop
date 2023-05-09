import { useContext, useState } from 'react';
import '.././styles/Modal-Items.css';
import { AddItemContext } from './useCart';

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7',
    zIndex: 1000
};

const BUTTON_STYLES = {
    width: "auto",
    height: "auto"
}

export default function ModalItems(props) {
    const { addItem, handleAddClick } = useContext(AddItemContext);
    const [showPopUp, setShowPopUp] = useState(false);

    const handlePopUp = () => {
        setShowPopUp(true);
        setTimeout(() => {
            setShowPopUp(false);
        }, 2000);
    };

    if (!props.open) {
        return null
    }

    return (
        <section className='modal-item-section'>
            <div style={OVERLAY_STYLES} />
            <div className="item-details">
                <div className='item-image'>
                    <h4>{props.name}</h4>
                    <img src={props.source} />
                    <p>Price: {props.price} €</p>
                </div>
                <div className='item-content'>
                    <h4>Description</h4>
                    <p>{props.description}</p>
                    <div className='content-buttons'>
                        <button onClick={() => {
                            addItem(props.id);
                            handleAddClick(props.id, props.name, props.price, props.source, 1);
                            handlePopUp();
                        }} style={BUTTON_STYLES}>
                            Add to cart
                        </button>
                        <button style={BUTTON_STYLES} onClick={props.Close}>Close</button>
                        {showPopUp ? <div className='popup-message'>Product added to cart!</div> : null}
                    </div>
                </div>
            </div>
        </section>
    )
};