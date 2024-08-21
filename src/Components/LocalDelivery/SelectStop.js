import React, { useState } from 'react';

const SelectStop = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStop, setSelectedStop] = useState('');

  // Update search term state as the user types in the search bar
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle selecting an option from the datalist
  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = props.stop.find(stop => stop.label === selectedValue);
    if (selectedOption) {
      setSelectedStop(selectedOption.label);
      if (props.setPickup) {
        props.setPickup(selectedOption.value);
      }
    }
  };

  // Filter options that start with the search term
  const filteredStops = props.stop.filter((stop) =>
    stop.label.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="form-group">
      <label className="form-label">{props.head}</label>
      
      {/* Input field with associated datalist */}
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        list="stops"
        onInput={handleSelect}
      />

      {/* Datalist element that displays filtered options */}
      <datalist id="stops">
        {filteredStops.map((stop, index) => (
          <option key={index} value={stop.label} />
        ))}
      </datalist>
    </div>
  );
};

export default SelectStop;
