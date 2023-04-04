import { createContext, useState } from "react";

export const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
    const [category, setCategory] = useState('Technology');

    const changeCategory = (textContent) => {
        setCategory(textContent);
    };
    // console.log(category)
    const categoryValue = { category, changeCategory };

    return (
        <CategoryContext.Provider value={categoryValue}>
            {children}
        </CategoryContext.Provider>
    )
};

export default CategoryProvider;