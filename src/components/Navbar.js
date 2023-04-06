import cart from '.././assets/shoppingcart.svg';
import user from '.././assets/user.svg';
import language from '.././assets/language.svg';
import search from '.././assets/search.svg';
import Switch from "./switch";
import '.././styles/Navbar.css';
import { useContext } from 'react';
import { ThemeContext } from './useTheme';
import { Link } from 'react-router-dom';


function Navbar() {
    const { theme } = useContext(ThemeContext);

    return (
        <nav class="navbar" style={{ backgroundColor: theme === 'light' ? 'var(--secondary)' : 'var(--darkGray)' }}>
            {/* Brand Name */}
            <div class="brand-title">Quickmart</div>
            {/* Search */}
            <div className='search' style={{
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
            </div>
            {/* Bars - Responsive */}
            <Link to="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </Link>
            {/* Links */}
            <div class="navbar-links">
                <ul>
                    <li><Link>Shop</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link><img src={cart} style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} /></Link></li>
                    <li><Link><img src={user} style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} /></Link></li>
                    <li><button style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }}><img style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} src={language} /></button></li>
                    <li><button style={{ color: theme === 'light' ? 'var(--black)' : 'var(--white)' }}><Switch /></button></li>
                </ul>
            </div>
        </nav>
    )
};


export default Navbar;