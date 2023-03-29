import { createContext, useState } from "react";

export const AddItemContext = createContext(null);

const AddItemProvider = ({ children }) => {
    const [counter, setCounter] = useState({
        id: "",
        count: 0
    });

    const [cart, setCart] = useState([]);

    const addItem = (id) => {
        setCounter({ ...counter, id: id, count: counter.count + 1 });
    };

    const removeItem = () => {
        counter.count > 0 ? setCounter({ ...counter, count: counter.count - 1 }) : setCounter(0);
    };

    const handleRemoveClick = (id, name, price, source, quantity, altsource) => {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > 0) {
                item.quantity--;
            }
            return item;
        }).filter(item => item.quantity > 0);
        setCart(updatedCart);
    }

    const handleAddClick = (id, name, price, source, quantity, altsource) => {
        const itemExists = cart.some(item => item.id === id);
        if (!itemExists) {
            setCart([...cart, { id, name, price, source, quantity, altsource }]);
        } else {
            const updatedCart = cart.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
            setCart(updatedCart);
        }
    };

    const providerValue = { addItem, removeItem, counter, handleRemoveClick, handleAddClick, cart }; // Oi times entos tou object tha einai diathesimes se oli tin efarmogi

    return (                                                 // afou to authcontext.provider kanei wrap to App
        <AddItemContext.Provider value={providerValue}>
            {children}
        </AddItemContext.Provider>
    )
};

export default AddItemProvider;