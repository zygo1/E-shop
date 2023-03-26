import { Link } from "react-router-dom";
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import search from '.././assets/search.svg';
import '.././styles/NavigationBar.css';

function NavigationBar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive-nav'); // Everytime that showNavbar is called the 'responsive-nav' class toggles, (removed and added to <nav ref={navRef}>)
    }

    const hideNavbar = () => {
        navRef.current.classList.remove('responsive-nav');
    }

    return (
        <div className="nav-container">
            <div className="left-side-nav">
                <div className="logo"><Link onClick={hideNavbar} to='/'>Quickmart</Link></div>
                <div className='search'>
                    <input placeholder='Search...' type={"text"} name="search"></input>
                    <button><img src={search} /></button>
                </div>
                <div className="links" ref={navRef}>
                    <Link onClick={hideNavbar} to='/Products.js'>Products</Link>
                    <Link onClick={hideNavbar} to='/Contact.js'>Contact</Link>
                    <Link onClick={hideNavbar} to='/Cart.js'>Cart</Link>
                    <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </div>
            </div>
            <div className="right-side-nav login-register">
                <Link className="login">Login</Link> / <Link to='/SignUp.js' className="register">Register</Link>
            </div>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </div>
    )
};

export default NavigationBar;