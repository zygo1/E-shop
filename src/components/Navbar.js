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
            <nav className="nav" ref={navRef}>
                <ul className="navList">
                    <li onClick={() => { navigate('/') }} className='quickmart'><Link to="/"><h2>QuickMart</h2></Link></li>
                    <li className='search'><input placeholder='Search...' type={"text"} name="search" className="search"></input><button><img src={search} /></button></li>
                    <li onClick={() => { navigate('/Products.js') }}><Link to="/Products.js">Products</Link></li>
                    <li onClick={() => { navigate('/Contact.js') }}><Link to="/Contact.js">Contact</Link></li>
                    <li onClick={() => { navigate('/Cart.js') }}><Link to="/Cart.js"><img src={cart} className="navImg" alt="Cart" /></Link></li>
                    <li onClick={() => { navigate('/Profile.js') }}><Link to="/Profile.js"><img src={user} className="navImg" alt="Profile" /></Link></li>
                </ul>
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

