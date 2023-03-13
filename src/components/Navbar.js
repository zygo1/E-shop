import React from 'react';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./styles/Navbar.css";
import cart from '.././assets/shoppingcart.svg';
import user from '.././assets/user.svg';
import search from '.././assets/search.svg';

function Navbar() {
    const navigate = useNavigate();
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive-nav');
    }

    return (
        <header>
            <div onClick={() => { navigate('/') }} className='quickmart'><Link to="/"><h2>QuickMart</h2></Link></div>
            <div className='search'><input placeholder='Search...' type={"text"} name="search"></input><button><img src={search} /></button></div>
            <nav className="nav" ref={navRef}>
                <Link onClick={() => { navigate('/Products.js') }} to="/Products.js">Products</Link>
                <Link onClick={() => { navigate('/Contact.js') }} to="/Contact.js">Contact</Link>
                <Link onClick={() => { navigate('/Cart.js') }} to="/Cart.js"><img src={cart} alt="Cart" /></Link>
                <Link onClick={() => { navigate('/Profile.js') }} to="/Profile.js"><img src={user} alt="Profile" /></Link>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>

    )
};

export default Navbar;

