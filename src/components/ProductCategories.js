import React, { useContext, useRef } from "react";
import { FaTimes } from 'react-icons/fa';
import { CategoryContext } from "./useCategory";


function ProductCategories(props) {
    // Screen width < Xpx
    const categRef = useRef();
    const showPopup = () => {
        categRef.current.classList.toggle('responsive-categories');
    };

    const hideCategories = () => {
        categRef.current.classList.remove('responsive-categories');
    };

    // Category list clicks
    const handleClick = (e) => {
        const content = e.target.dataset.category;
        if (content) {
            changeCategory(content);
        }
    }

    const handleListClick = (e) => {
        const content = handleClick(e);
    }

    // Context
    const { category, changeCategory } = useContext(CategoryContext);

    return (
        <div>
            <button onClick={showPopup} className="open-categories categ-btn" style={{
                color: props.theme === 'light' ? 'var(--black)' : 'var(--white)',
                backgroundColor: props.theme === 'light' ? 'var(--secondary)' : 'var(--categoriesColor)'
            }}>Categories
            </button>
            <nav className="categories" ref={categRef} style={{
                backgroundColor: props.theme === 'light' ? 'var(--itemColor)' : 'var(--darkGray)',
                boxShadow: props.theme === 'light' ? null : 'none'
            }}>
                <h3 style={{ color: props.theme === 'light' ? 'var(--black)' : 'var(--itemColor)' }}>Categories</h3>
                <ul className="categories-list" onClick={handleListClick} style={{
                    color: props.theme === 'light' ? 'var(--black)' : 'var(--itemColor)'
                }} >
                    <li onClick={hideCategories} className="listElements active" data-category="Technology">Technology</li>
                    <li onClick={hideCategories} className="listElements active" data-category="Women's Clothing">Women's Clothing</li>
                    <li onClick={hideCategories} className="listElements active" data-category="Men's Clothing">Men's Cloting</li>
                    <li onClick={hideCategories} className="listElements active" data-category="Fashion">Fashion</li>
                </ul>
                <button onClick={showPopup} className="close-categories categ-btn"><FaTimes /></button>
            </nav>
        </div >

    )
};

export default ProductCategories;