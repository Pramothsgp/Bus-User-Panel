import React, { useEffect, useState } from 'react';
import "./Delivery.css"


import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
const locationData = [
  { id:"ukd", name: 'ukkadam', latitude: 10.985936, longitude: 76.965408 },
  { id :"kun",name: 'kuniyamuthur', latitude: 10.96324600, longitude: 76.94702200 },
  { id:"kvp",name: 'kovaipudur perivu', latitude: 10.93676, longitude: 76.951173 }
];
const num = '1234567890';
const alpb = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DeliveryDetails = () => {
  const [orderid, setOrderid] = useState('');
  const [price, setPrice] = useState(0);
  const [weight, setweight] = useState(null);
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [showOrder, setShowOrder] = useState(false);
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
        <div className='HLP-searchbar-container'>
          <SearchBar 
            inputValue={pickupLocation}
            setInputValue={setPickupLocation}
            allSuggestions={locationData}
            attribute='name'
            label='Pick Up Location'
          />
          </div>
        <div className='HLP-searchbar-container'>
          <SearchBar 
            inputValue={destination}
            setInputValue={setDestination}
            allSuggestions={locationData}
            attribute='name'
            label= 'Delivery Location'
          />
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
            }}
          />
        </div>
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
        </div>
      }
    </div>
  );
};

export default DeliveryDetails;