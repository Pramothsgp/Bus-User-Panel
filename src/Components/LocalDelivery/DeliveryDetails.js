import React, { useEffect, useState } from 'react';
import "./Delivery.css"
import { useNavigate } from 'react-router-dom';
import AvailHLPBus from '../HLPBuses/AvailHLPBus';
import ComboBox from '../StopAutoComplete/ComboBox';
import AvailableBus from '../AvailableBus/AvailableBus';

const num = '1234567890';
const alpb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DeliveryDetails = () => {
  const [orderid, setOrderid] = useState('');
  const [price, setPrice] = useState(0);
  const [weight, setweight] = useState(null);
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [showOrder, setShowOrder] = useState(false);
  const [showBus,setShowBus] = useState(false);
  const [bus,setBus] = useState('');
  const navigate = useNavigate();
  useEffect(() => {

    if (!localStorage.getItem('orders')) {
      localStorage.setItem('orders', JSON.stringify([]));
    }
  }, []);

  const handleSubmit = () => {
    var temp = '';
    for (var i = 0; i < 2; i++)
      temp += alpb[Math.floor(Math.random() * 26)];
    for (i = 0; i < 3; i++)
      temp += num[Math.floor(Math.random() * 10)];

    const calculatedPrice = Math.round(weight * 2.76 * 100) / 100;
    setOrderid(temp);
    setPrice(calculatedPrice);
    setShowOrder(true);

    const newOrder = {
      pickupLocation,
      destination,
      orderid: temp,
      bus:bus,
      price: calculatedPrice
    };

    const orders = JSON.parse(localStorage.getItem('orders'));

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
  };

  const handleViewOrders = () => {
    navigate('/orders');
  };
  return (
    <div className='HLP-container' >
      <h1><center>Hyper Local Delivery</center></h1>
      <div className='HLP-form' >
        <div style={{display:"grid",gap:"3ch"}}>
        <div className='HLP-searchbar-container'>
          <ComboBox stopUpdate={setPickupLocation} label={"PickUp Location"}/>
          </div>
        <div className='HLP-searchbar-container'>
          <ComboBox stopUpdate={setDestination} label={"Drop Location"}/>
        </div>
        </div>
        <div className='HLP-weight-container'>
          <div className='HLP-weight-label'>
            <label htmlFor='weight-input'>Enter Weight</label>
          </div>
          <input  
            id='weight-input'
            type='number'
            placeholder='Enter Weight'
            required
            onChange={(e) => {
              setweight(e.target.value);
              setShowOrder(false);
              setShowBus(true);
            }}
          />
        </div>
        { showBus &&
        <div className='HLP-Avail-container'>
          <div className='HLP-Avail-label'>
            <AvailHLPBus handleBus={setBus}/>
            <AvailableBus/> 
        </div>
        </div>
      }
        <div className='HLP-btn-container'>
        {!showOrder &&
          <button
            className='HLP-form-btn'
            onClick={handleSubmit}
          >Submit</button>
        }
        <button
            className='HLP-form-btn'
            onClick={handleViewOrders}
            >View Orders</button>
      </div>
            </div>
      {showOrder &&
        <div className='HLP-weight-container'>
          <h3>
            Order id : {orderid}
          </h3>
          <h3>
            Price : {price}
          </h3>
          <h3>
            Bus : {bus}
          </h3>
        </div>
      }
    </div>
  );
};

export default DeliveryDetails;