import React, { useState } from 'react';
import "./Delivery.css"

import SearchBar from '../SearchBar/SearchBar';
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
  const handleSubmit = ()=>{
    var temp = '';
    for (var i = 0; i < 2; i++)
      temp += alpb[Math.floor(Math.random() * 26)];
    for ( i = 0; i < 3; i++)
      temp += num[Math.floor(Math.random() * 10)];

    setOrderid(temp);
    setPrice(Math.round(weight * 2.76 * 100)/100);
    setShowOrder(true);
  }
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
            onChange={(e) => {
              setweight(e.target.value);
              setShowOrder(false);
            }}
          />
        </div>
        {!showOrder &&
          <button
            className='HLP-form-btn'
            onClick={handleSubmit}
          >Submit</button>
        }
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