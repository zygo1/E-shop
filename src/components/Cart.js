import ItemCart from "./ItemCart.js"
import emptyCart from '.././assets/empty_cart.svg';
import '.././styles/Cart.css';
import { useContext } from "react";
import { AddItemContext } from "./useCart";
import { ThemeContext } from './useTheme'

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
                <button style={{ boxShadow: props.theme === 'light' ? null : 'none' }}>Continue to payment</button>
            </div>
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
            <p className='pageHeader'>Cart</p>
            <div className="cart-items-container" >
                <div className="itemList" >
                    {cartList.length > 0 ? <p style={{ color: theme === 'light' ? null : 'var(--white)' }} className="yourCart">Your cart</p> : null}
                    {cartList.length > 0 ? cartList : <EmptyCartMessage />}
                </div>
                {cartList.length > 0 ? <OrderSummary theme={theme} /> : null}
            </div>
        </section>
    )
};

export default Cart;