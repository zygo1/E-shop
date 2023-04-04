import React, { useContext, useRef } from "react";
import { FaBox, FaTimes } from 'react-icons/fa';
import { CategoryContext } from "./useCategory";


function ProductCategories(props) {
    // Screen width < Xpx
    const categRef = useRef();
    const showPopup = () => {
        categRef.current.classList.toggle('responsive-categories');
    };

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

    // const checkCategory = () => {
    //     if (category === 'Technology') {
    //         console.log('tech')
    //     }
    //     else if (category === "Home & Garden") {
    //         console.log('home')
    //     }
    //     else if (category === "Books") {

    //     }
    //     else if (category === "Kids") {

    //     }
    //     else if (category === "Fashion") {

    //     }
    //     else if (category === "Sports") {

    //     }
    //     else if (category === "Health & Beauty") {

    //     }
    // };

    return (
        <div>
            <button onClick={showPopup} className="open-categories categ-btn">
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
                    <li className="listElements">Technology</li>
                    <li className="listElements">Home & Garden</li>
                    <li className="listElements">Books</li>
                    <li className="listElements">Kids</li>
                    <li className="listElements">Fashion</li>
                    <li className="listElements">Sports</li>
                    <li className="listElements">Health & Beauty</li>
                </ul>
                <button onClick={showPopup} className="close-categories categ-btn"><FaTimes /></button>
            </nav>
        </div >

    )

    // style={{ color: props.theme === 'light' ? 'var(--black)' : 'var(--itemColor)' }}
};

export default ProductCategories;