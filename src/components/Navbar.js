import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cart from '.././assets/shoppingcart.svg';
import user from '.././assets/user.svg';

function Navbar() {
    const navigate = useNavigate();

    return (
        <header>
            <nav className="nav">
                <ul className="navList">
                    <li onClick={() => { navigate('/') }} className='quickmart'><Link to="/"><h2>QuickMart</h2></Link></li>
                    <li onClick={() => { navigate('/Products.js') }}><Link to="/Products.js">Products</Link></li>
                    <li onClick={() => { navigate('/Contact.js') }}><Link to="/Contact.js">Contact</Link></li>
                    <li onClick={() => { navigate('/Cart.js') }}><Link to="/Cart.js"><img src={cart} className="navImg" alt="Cart" /></Link></li>
                    <li onClick={() => { navigate('/Profile.js') }}><Link to="/Profile.js"><img src={user} className="navImg" alt="Profile" /></Link></li>
                </ul>
            </nav>
        </header>

    )
};

export default Navbar;

