import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import DeliveryDetails from './Components/LocalDelivery/DeliveryDetails';
import NavBar from './Components/Navigation/NavBar';
import UserMap from './Components/Map/UserMap';
import HomeMap from './Components/Map/HomeMap';
import OrderList from './Components/Orders/OrderList';
import AddRoute from './AddFireBase/AddRoute';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Deliverydetails" element={<DeliveryDetails />} />
          <Route path='/map' element={<UserMap />} />  
          <Route path='/home-map' element={<HomeMap />} />
          <Route path='/orders' element={<OrderList />} />
          <Route path="/AddRoute" element={<AddRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
