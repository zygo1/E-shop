import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import NavigationBar from './components/NavigationBar';
import MyAccount from './components/MyAccount';

function App() {
  const location = useLocation();

  const isSignupPage = location.pathname.includes('/SignUp.js');

  return (
    <div>
      {!isSignupPage && <NavigationBar />}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Products.js' element={<Products />} />
        <Route path='/Contact.js' element={<Contact />} />
        <Route path='/Cart.js' element={<Cart />} />
        <Route path='/Profile.js/*' element={<Profile />} />
        <Route path='/SignUp.js' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
