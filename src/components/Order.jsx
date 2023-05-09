import { useContext } from "react";
import { ThemeContext } from "./useTheme";

function Order(props) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="mainDiv">
            <div className="containerOrders" style={{
                boxShadow: theme === 'light' ? null : 'var(--darkGray)',
                border: theme === 'light' ? null : '2px solid var(--darkGray)'
            }}>
                <img src={props.source} />
                <div className="stats">
                    <p className="status">Delivered</p>
                    <p>{props.name}</p>
                    <p className="orderNumber">Order number: <span className="insideContent">{props.orderNumber}</span></p>
                    <p className="shippingAddress">Shipping address: <span className="insideContent">{props.address}</span></p>
                    <button>Return request</button>
                </div>
            </div>
        </div>
    )
};

export default Order;