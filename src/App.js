import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import DeliveryDetails from './Components/LocalDelivery/DeliveryDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Deliverydetails" element={<DeliveryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
