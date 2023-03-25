import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Profile from './components/Profile';
import MyAccount from './components/MyAccount';
import MyOrders from './components/MyOrders';
import ProfileSettings from './components/ProfileSettings';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';

function App() {
  const location = useLocation();

  // Check if the current route is for the signup page
  const isSignupPage = location.pathname.includes('/SignUp.js');

  return (
    <div>
      {/* Render the Navbar component only if the current route is not for the signup page */}
      {!isSignupPage && <Navbar />}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Products.js' element={<Products />} />
        <Route path='/Contact.js' element={<Contact />} />
        <Route path='/Cart.js' element={<Cart />} />
        <Route path='/Profile.js/*' element={<Profile />} />
        <Route path='/Profile.js/MyAccount.js' element={<MyAccount />} />
        <Route path='/Profile.js/MyOrders.js' element={<MyOrders />} />
        <Route path='/Profile.js/ProfileSettings.js' element={<ProfileSettings />} />
        <Route path='/SignUp.js' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
