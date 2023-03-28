import { Link } from "react-router-dom";
import { useRef, useContext } from 'react';
import { AddItemContext } from './useAuth';
import { FaBars, FaTimes } from 'react-icons/fa';
import cart from '.././assets/shoppingcart.svg';
import search from '.././assets/search.svg';
import '.././styles/NavigationBar.css';


function NavigationBar() {
    const { counter } = useContext(AddItemContext);
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive-nav');
    }

    const hideNavbar = () => {
        navRef.current.classList.remove('responsive-nav');
    }

    return (
        <div className="nav-container">
            <div className="logo"><Link onClick={hideNavbar} to='/'>Quickmart</Link></div>
            <div className='search'>
                <input placeholder='Search...' type={"text"} name="search"></input>
                <button><img src={search} /></button>
            </div>
            <div className="links" ref={navRef}>
                <Link onClick={hideNavbar} to='/Products.js'>Products</Link>
                <Link onClick={hideNavbar} to='/Contact.js'>Contact</Link>
                <Link onClick={hideNavbar} to='/Profile.js/MyAccount.js'>Profile</Link>

                <div className="right-side-nav login-register">
                    <Link onClick={hideNavbar} to='/Cart.js'><img src={cart} /></Link>
                    {counter.count > 0 ? <span className="cart-index">{counter.count}</span> : null}
                    {/* <Link className="login">Login</Link> / <Link to='/SignUp.js' className="register">Register</Link> */}
                </div>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </div>

            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </div>
    )
};

export default NavigationBar;