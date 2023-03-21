import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Profile from './components/Profile';
import MyAccount from './components/MyAccount';
import MyOrders from './components/MyOrders';
import ProfileSettings from './components/ProfileSettings';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Products.js' element={<Products />} />
        <Route path='/Contact.js' element={<Contact />} />
        <Route path='/Profile.js' element={<Profile />} />
        <Route path='/Cart.js' element={<Cart />} />
        <Route path='/MyAccount.js' element={<MyAccount />} />
        <Route path='/MyOrders.js' element={<MyOrders />} />
        <Route path='/ProfileSettings.js' element={<ProfileSettings />} />
      </Routes>
    </>
  );
}

export default App;
