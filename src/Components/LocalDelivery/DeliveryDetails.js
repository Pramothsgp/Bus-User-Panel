import React, { useState } from 'react';
import "./Delivery.css"

import SearchBar from '../SearchBar/SearchBar';
const locationData = [
  { id:"ukd", name: 'ukkadam', latitude: 10.985936, longitude: 76.965408 },
  { id :"kun",name: 'kuniyamuthur', latitude: 10.96324600, longitude: 76.94702200 },
  { id:"kvp",name: 'kovaipudur perivu', latitude: 10.93676, longitude: 76.951173 }
];
const DeliveryDetails = () => {
  
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');
  return (
    <div className='HLP-container'>
      <form className='HLP-form'>
        <div className='HLP-searchbar-container'>
          <SearchBar 
            inputValue={pickupLocation}
            setInputValue={setPickupLocation}
            allSuggestions={locationData}
            attribute='name'
            label= 'Pick Up Location'
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
        <button className='HLP-form-btn'>Submit</button>
      </form>
    </div>
  );
};

export default DeliveryDetails;