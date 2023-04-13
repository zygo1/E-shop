import cart from '.././assets/shoppingcart.svg';
import user from '.././assets/user.svg';
import language from '.././assets/language.svg';
import search from '.././assets/search.svg';
import Switch from "./switch";
import '.././styles/Navbar.css';
import { useState, useRef, useEffect, useContext } from 'react';
import { ThemeContext } from './useTheme';
import { Link, useNavigate } from 'react-router-dom';
import { AddItemContext } from './useCart';
import { AuthContext } from './useAuth';
import Modal from './Modal'


function Navbar() {
    const { isAuthenticated } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const { counter } = useContext(AddItemContext);
    const { theme } = useContext(ThemeContext);
    const [isActive, setIsActive] = useState(false);
    const navRef = useRef(null);
    const navigate = useNavigate();

    const handleModal = () => {
        isAuthenticated ? setIsOpen(false) : setIsOpen(true);
    };

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const handleRemove = () => {
        setIsActive(false);
    };
    /*
    This creates a function called handleWindowClick which is called when a click
    event occurs on the window object. The function takes an event object e as its
    argument. If the navRef is defined (i.e., not null or undefined) and the e.target
    (i.e., the DOM element that was clicked) is not contained within navRef, then it
    sets the isActive state variable to false.
    */
    const handleWindowClick = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleWindowClick)

        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, []);

    return (
        <>
            <nav className="navbar" ref={navRef} style={{ backgroundColor: theme === 'light' ? 'var(--navWhite)' : 'var(--darkGray)' }}>
                {/* Brand Name */}
                <div onClick={() => { navigate('/'); handleRemove() }} className="brand-title"><Link>Quickmart</Link></div>
                {/* Search */}
                {/* <div className='search' style={{
                backgroundColor: theme === 'light' ? 'var(--secondary)' : 'var(--veryDarkGray)',
                borderColor: theme === 'light' ? 'var(--secondary)' : 'var(--darkGray)',
                color: theme === 'light' ? 'var(--black)' : 'var(--secondary)'
            }}>
                <input placeholder='Search...' type={"text"} name="search" style={{
                    backgroundColor: 'transparent',
                    color: theme === 'light' ? 'var(--black)' : 'var(--secondary)'
                }}></input>
                <button className="search-button" style={{ backgroundColor: theme === 'light' ? 'transparent' : 'transparent' }}>
                    <img src={search} style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} />
                </button>
            </div> */}
                {/* Bars - Responsive */}
                <Link to="#" className="toggle-button" onClick={handleToggle}>
                    <span className="bar" style={{ backgroundColor: theme === 'light' ? 'var(--black)' : 'var(--white)' }}></span>
                    <span className="bar" style={{ backgroundColor: theme === 'light' ? 'var(--black)' : 'var(--white)' }}></span>
                    <span className="bar" style={{ backgroundColor: theme === 'light' ? 'var(--black)' : 'var(--white)' }}></span>
                </Link>
                {/* Links */}
                <div className={`navbar-links ${isActive ? 'active' : ''}`}>
                    <ul>
                        <li onClick={() => { navigate('/Products.js'); handleRemove() }} ><Link style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }}>Shop</Link></li>
                        <li onClick={() => { navigate('/Contact.js'); handleRemove() }} ><Link style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }}>Contact</Link></li>
                        <li onClick={() => { navigate('/Cart.js'); handleRemove() }}><Link><img src={cart} style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} />{counter.count > 0 ? <span className="item-counter">{counter.count}</span> : null}</Link></li>
                        {/* <li onClick={() => { navigate('/Cart.js'); handleRemove() }}>{counter.count > 0 ? <span className="cart-index">{counter.count}</span> : null}</li> */}
                        <li onClick={() => { handleRemove(); { isAuthenticated ? navigate('/Profile.js/MyAccount.js') : handleModal() } }}><Link><img src={user} style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} /></Link></li>
                        {/* <li><button ><img style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} src={language} /></button></li> */}
                        <li id='slider-button'><button><Switch /></button></li>
                    </ul>
                </div>
            </nav>
            <Modal
                open={isOpen}
                onClose={() => { setIsOpen(false) }}>
                Login Modal
            </Modal>
        </>
    )
};


export default Navbar;