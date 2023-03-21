

function Order(props) {
    return (
        <div className="mainDiv">
            <div className="containerOrders">
                <img src={props.img} />
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