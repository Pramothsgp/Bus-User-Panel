import React from 'react';

const LocationDropBox = ({ locationData, handleStopChange }) => {
  return (
    <div>
      <select onChange={handleStopChange} defaultValue="">
        <option value="" disabled>Select a stop</option>
        {locationData.map(location => (
          <option key={location.id} value={location.name}>
            {location.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationDropBox;
