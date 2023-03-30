import './App.css';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import NavigationBar from './components/NavigationBar';
import { ThemeContext } from './components/useTheme';
import { useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isSignupPage = location.pathname.includes('/SignUp.js');

  const { theme } = useContext(ThemeContext);

  return (
    <div style={{
      backgroundColor: theme === 'light' ? 'var(--secondary)' : 'var(--veryDarkGray)',
      color: theme === 'dark' ? 'white' : undefined
    }}>
      {!isSignupPage && <NavigationBar />}
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
