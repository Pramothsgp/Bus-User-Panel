import React, { useState } from 'react';
import "./Delivery.css"
import Pickup from './SelectStop';
import SelectStop from './SelectStop';
    const DeliveryDetails = () => {
      const stopOptions = [
        { value: 'ukkadam', label: 'ukkadam' },
        { value: 'kuniyamuthur', label: 'kuniyamuthur' },
        { value: 'bk pudur', label: 'bk pudur' },
        { value: 'skcet', label: 'skcet' }
    ];
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');

  const handlePickUp = (value) => {
    setPickupLocation(value);
  };

  const handleDestination = (value) => {
    setDestination(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to your backend
  };

  return (
    <>
    <h2>Hyper Local Delivery</h2>
    <div className='delbody'>
      <div className='head2'><h3>Delivery AtoB</h3></div>
      <div className='stopab'>
      <form onSubmit={handleSubmit}>
      <SelectStop stop={stopOptions} head="Pickup" setPickup={handlePickUp} />
      <SelectStop stop={stopOptions} head="Destination" setDestination={handleDestination} />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
    </>
  );
};

export default DeliveryDetails;