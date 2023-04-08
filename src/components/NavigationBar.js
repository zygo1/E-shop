// import { Link } from "react-router-dom";
// import { useRef, useContext } from 'react';
// import { AddItemContext } from './useCart';
// import { ThemeContext } from './useTheme';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import cart from '.././assets/shoppingcart.svg';
// import search from '.././assets/search.svg';
// import '.././styles/NavigationBar.css';
// import Switch from "./switch";

// function NavigationBar() {
//     const { counter } = useContext(AddItemContext);
//     const { theme } = useContext(ThemeContext);
//     const navRef = useRef();

//     const showNavbar = () => {
//         navRef.current.classList.toggle('responsive-nav');
//     };

//     const hideNavbar = () => {
//         navRef.current.classList.remove('responsive-nav');
//     };

//     return (
//         <div className="nav-container" style={{ backgroundColor: theme === 'light' ? 'var(--secondary)' : 'var(--darkGray)' }}>
//             <div className="logo"><Link onClick={hideNavbar} to='/'>Quickmart</Link></div>
//             <div className='search'>
//                 <input placeholder='Search...' type={"text"} name="search" style={{
//                     backgroundColor: theme === 'light' ? 'var(--secondary)' : 'var(--veryDarkGray)',
//                     borderColor: theme === 'light' ? 'var(--secondary)' : 'var(--darkGray)',
//                     color: theme === 'light' ? 'var(--black)' : 'var(--secondary)'
//                 }}></input>
//                 <button className="search-button" style={{ backgroundColor: theme === 'light' ? 'transparent' : 'transparent' }}>
//                     <img src={search} style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} />
//                 </button>
//             </div>
//             <nav className="links" ref={navRef}>
//                 <Link onClick={hideNavbar} to='/Products.js'>Products</Link>
//                 <Link onClick={hideNavbar} to='/Contact.js'>Contact</Link>
//                 <Link onClick={hideNavbar} to='/Profile.js/MyAccount.js'>Profile</Link>
//                 <div className="right-side-nav login-register">
//                     <Link onClick={hideNavbar} to='/Cart.js'><img src={cart} style={{ filter: theme === 'light' ? 'var(--blackFilter)' : 'var(--whiteFilter)' }} /></Link>
//                     {counter.count > 0 ? <span className="cart-index">{counter.count}</span> : null}
//                     {/* <div>
//                         <Link className="login">Login</Link>
//                         /
//                         <Link to='/SignUp.js' className="register">Register</Link>
//                     </div> */}
//                     <Switch />
//                 </div>
//                 <button className='nav-btn nav-close-btn' onClick={showNavbar}>
//                     <FaTimes />
//                 </button>
//             </nav>
//             <button className='nav-btn' onClick={showNavbar} style={{ color: theme === 'light' ? 'var(--darkGray)' : 'white' }}>
//                 <FaBars />
//             </button>
//         </div>
//     )
// };

// export default NavigationBar;