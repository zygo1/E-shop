import './App.css';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Profile from './components/Profile';
import SignUp from './components/login-register/SignUp';
// import NavigationBar from './components/NavigationBar';
import Navbar from './components/Navbar';
import { ThemeContext } from './components/useTheme';
import { useContext, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isSignupPage = location.pathname.includes('/SignUp.js');
  const { theme } = useContext(ThemeContext);

  // Main Background Color
  const html = document.documentElement;
  html.style.backgroundColor = theme === 'light' ? 'var(--secondary)' : 'var(--veryDarkGray)';

  useEffect(() => {
    document.title = 'Quickmart'
  }, [])

  return (
    <div style={{
      backgroundColor: theme === 'light' ? 'var(--secondary)' : 'var(--veryDarkGray)',
      color: theme === 'dark' ? 'white' : undefined
    }}>
      {!isSignupPage && <Navbar />}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Products.js' element={<Products />} />
        <Route path='/Contact.js' element={<Contact />} />
        <Route path='/Cart.js' element={<Cart />} />
        <Route path='/Profile.js/*' element={<Profile />} />
        <Route path='/SignUp.js' element={<SignUp />} />
      </Routes>
    </div >

  );
};

export default App;
