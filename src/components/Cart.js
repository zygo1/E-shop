import ItemCart from "./ItemCart.js"
import emptyCart from '.././assets/empty_cart.svg';
import '.././styles/Cart.css';
import { useContext, useState } from "react";
import { AddItemContext } from "./useCart";
import { ThemeContext } from './useTheme';
import Modal from './Modal.js';
import { AuthContext } from "./useAuth.js";

const EmptyCartMessage = () => {
    return (
        <div className="emptyCart">
            <p>Looks like your cart is feeling a bit empty!</p>
            <img src={emptyCart} />
        </div>
    )
};

const OrderSummary = (props) => {
    const { cart } = useContext(AddItemContext);
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated } = useContext(AuthContext);

    const handleModal = () => {
        isAuthenticated ? setIsOpen(false) : setIsOpen(true);
    };

    const totalSumArr = cart.map(item => {
        let sum = item.price * item.quantity;
        return sum
    });
    const totalSum = totalSumArr.reduce((prev, curr) => prev + curr, 0).toFixed(2);

    return (
        <div className="summary" >
            <p style={{ color: props.theme === 'light' ? null : 'var(--white)' }}>Order Summary</p>
            <div className="sum-info">
                <p>Location: <span className="city">Thessaloniki</span></p>
                <p>Total: <span className="totalCost">{totalSum}</span> €</p>
                <button style={{ boxShadow: props.theme === 'light' ? null : 'none' }}
                    onClick={() => {
                        if (!isAuthenticated) {
                            handleModal();
                        }
                    }}>Continue to payment</button>
            </div>
            <Modal
                open={isOpen}
                onClose={() => { setIsOpen(false) }}>
                Login Modal
            </Modal>
        </div>
    )
}

function Cart() {
    const { cart } = useContext(AddItemContext);
    const { theme } = useContext(ThemeContext);

    const cartList = cart.map(item => {
        return (
            <div className="item-cart-container">
                <ItemCart
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    altsource={item.altsource}
                    quantity={item.quantity}
                />
            </div>
        )
    });

    return (
        <section className="cart-main-container">
            <p className='pageHeader' style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }}>Cart</p>
            <div className="cart-items-container" >
                <div className="itemList" >
                    {cartList.length > 0 ? cartList : <EmptyCartMessage />}
                </div>
                {cartList.length > 0 ? <OrderSummary theme={theme} /> : null}
            </div>
        </section>
    )
};

export default Cart;