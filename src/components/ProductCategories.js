import { useRef } from "react";
import { FaBox, FaTimes } from 'react-icons/fa';

function ProductCategories() {
    const categRef = useRef();

    const showPopup = () => {
        categRef.current.classList.toggle('responsive-categories');
    };


    return (
        <div>
            <button onClick={showPopup} className="open-categories categ-btn">
                <FaBox />Categories
            </button>
            <nav className="categories" ref={categRef}>
                <button onClick={showPopup} className="close-categories categ-btn"><FaTimes /></button>
                <h3>Categories</h3>
                <ul className="categories-list">
                    <li className="listElements">Technology</li>
                    <li className="listElements">Home & Garden</li>
                    <li className="listElements">Books</li>
                    <li className="listElements">Kids</li>
                    <li className="listElements">Fashion</li>
                    <li className="listElements">Sports</li>
                    <li className="listElements">Games</li>
                    <li className="listElements">Health & Beauty</li>
                </ul>
            </nav>
        </div>

    )
};

export default ProductCategories;