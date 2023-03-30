import ItemCart from "./ItemCart.js"
import emptyCart from '.././assets/empty_cart.svg';
import '.././styles/Cart.css';
import { useContext } from "react";
import { AddItemContext } from "./useCart";

const EmptyCartMessage = () => {
    return (
        <div className="emptyCart">
            <p>Looks like your cart is feeling a bit empty!</p>
            <img src={emptyCart} />
        </div>
    )
};

const OrderSummary = () => {
    const { cart } = useContext(AddItemContext);

    const totalSumArr = cart.map(item => {
        let sum = item.price * item.quantity;
        return sum
    });
    const totalSum = totalSumArr.reduce((prev, curr) => prev + curr, 0).toFixed(2);

    return (
        <div className="summary">
            <p>Order Summary</p>
            <div className="sum-info">
                <p>Location: <span className="city">Thessaloniki</span></p>
                <p>Total: <span className="totalCost">{totalSum}</span> €</p>
                <button>Continue to payment</button>
            </div>
        </div>
    )
}

function Cart() {
    const { cart } = useContext(AddItemContext);

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
        <>
            <p className='pageHeader'>Cart</p>
            <section className="cart-container">
                <div className="itemList">
                    {cartList.length > 0 ? <p className="yourCart">Your cart</p> : null}
                    {cartList.length > 0 ? cartList : <EmptyCartMessage />}
                </div>
                {cartList.length > 0 ? <OrderSummary /> : null}
            </section>
        </>
    )
};

export default Cart;