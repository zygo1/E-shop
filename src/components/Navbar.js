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

    const handleWindowClick = (e) => {
        if (navRef.current && !navRef.current.contains(e.target)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = navRef.current;

            if (!headerElement) {
                return;
            };

            if (prevScrollPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrollPos = currentScrollPos;
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

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
                        <li onClick={() => { navigate('/Products.js'); handleRemove() }} >
                            <Link style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }}>
                                Shop
                            </Link>
                        </li>
                        <li onClick={() => { navigate('/Contact.js'); handleRemove() }} >
                            <Link style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }}>
                                Contact
                            </Link>
                        </li>
                        <li onClick={() => { navigate('/Cart.js'); handleRemove() }}>
                            <Link>
                                <img src={cart} style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} />
                                <span className={`item-counter ${counter.count > 0 ? '' : 'active-items'}`}>{counter.count}</span>
                            </Link>
                        </li>
                        <li onClick={() => { handleRemove(); { isAuthenticated ? navigate('/Profile.js/MyAccount.js') : handleModal() } }}>
                            <Link>
                                <img src={user} style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} />
                            </Link>
                        </li>
                        {/* <li><button ><img style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} src={language} /></button></li> */}
                        <li id='slider-button'>
                            <button><Switch /></button>
                        </li>
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