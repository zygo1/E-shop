import ItemCart from "./ItemCart.js"
import '.././styles/Cart.css';
import { useContext } from "react";
import { AddItemContext } from "./useAuth";

const EmptyCartMessage = () => {
    return (
        <div className="emptyCart">
            <p>Looks like your cart is feeling a bit empty!</p>
        </div>
    )
};

function Cart() {
    const { cart } = useContext(AddItemContext);
    console.log(cart);
    const cartList = cart.map(item => {
        return (
            <ItemCart
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
            // source={require(`.././${item.source}`)}
            />
        )
    });

    return (
        <>
            <p className='pageHeader'>Cart</p>
            <section>
                {cartList.length > 0 ? cartList : <EmptyCartMessage />}
            </section>
        </>
    )
};

export default Cart;