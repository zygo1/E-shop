import React from 'react';
import { Link } from 'react-router-dom';
import cart from '.././assets/shoppingcart.svg';
import user from '.././assets/user.svg';

function Navbar() {
    return (
        <nav className="nav">
            <ul className="navList">
                <li className='quickmart'><Link to="/"><h2>QuickMart</h2></Link></li>
                <li><Link to="/Products.js">Products</Link></li>
                <li><Link to="/Contact.js">Contact</Link></li>
                <li><Link to="/Cart.js"><img src={cart} className="navImg" alt="Cart" /></Link></li>
                <li><Link to="/Profile.js"><img src={user} className="navImg" alt="Profile" /></Link></li>
            </ul>
        </nav>
    )
};

export default Navbar;

