import React, { useContext, useRef } from "react";
import { FaBox, FaTimes } from 'react-icons/fa';
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

    // test
    const hide = (e) => {
        console.log(e.target)
    }

    // Category list clicks
    const handleClick = (e) => {
        const content = e.target.textContent;
        changeCategory(content);
    }

    const handleListClick = (e) => {
        const content = handleClick(e);
    }

    // Context
    const { category, changeCategory } = useContext(CategoryContext);



    return (
        <div>
            <button onClick={showPopup} className="open-categories categ-btn" style={{
                color: props.theme === 'light' ? 'var(--black)' : 'var(--white)'
            }}>
                <FaBox />Categories
            </button>
            <nav className="categories" ref={categRef} style={{
                backgroundColor: props.theme === 'light' ? 'var(--itemColor)' : 'var(--darkGray)',
                boxShadow: props.theme === 'light' ? null : 'none'
            }}>
                <h3 style={{ color: props.theme === 'light' ? 'var(--black)' : 'var(--itemColor)' }}>Categories</h3>
                <ul className="categories-list" onClick={handleListClick} style={{
                    color: props.theme === 'light' ? 'var(--black)' : 'var(--itemColor)'
                }} >
                    <li onClick={hideCategories} className="listElements">Technology</li>
                    <li onClick={hideCategories} className="listElements">Home & Garden</li>
                    <li onClick={hideCategories} className="listElements">Books</li>
                    <li onClick={hideCategories} className="listElements">Kids</li>
                    <li onClick={hideCategories} className="listElements">Fashion</li>
                    <li onClick={hideCategories} className="listElements">Sports</li>
                    <li onClick={hideCategories} className="listElements">Health & Beauty</li>
                </ul>
                <button onClick={showPopup} className="close-categories categ-btn"><FaTimes /></button>
            </nav>
        </div >

    )

    // style={{ color: props.theme === 'light' ? 'var(--black)' : 'var(--itemColor)' }}
};

export default ProductCategories;