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
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      < Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Products.js' element={<Products />} />
        <Route path='/Contact.js' element={<Contact />} />
        <Route path='/Profile.js' element={<Profile />} />
        <Route path='/Cart.js' element={<Cart />} />
        <Route path='/Profile.js/MyAccount.js' element={<MyAccount />} />
        <Route path='/Profile.js/MyOrders.js' element={<MyOrders />} />
        <Route path='/Profile.js/ProfileSettings.js' element={<ProfileSettings />} />
        <Route path='/Profile.js/SignUp.js' element={<SignUp />} />
        <Route path='/Profile.js/Contact.js' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;



    // { <Router>
    //     <Routes>
    //       <Route exact path='/Profile.js/SignUp.js' element={<SignUp />}></Route>
    //       <div>
    //         <Navbar />
    //         <Route path='/' element={<Homepage />} />
    //         <Route path='/Products.js' element={<Products />} />
    //         <Route path='/Contact.js' element={<Contact />} />
    //         <Route path='/Profile.js' element={<Profile />} />
    //       </div>
    //     </Routes>
    //   </Router> }



